import React from 'react';
import Textarea from '../components/Textarea';
import ButtonText from '../components/ButtonText';
import Document from '../components/Document';
import CommentPreview from '../components/CommentPreview';
import ColumnLayout from '../components/ColumnLayout';
import CommentForm from '../components/CommentForm';
import PostLockup from '../components/PostLockup';
import Nav from '../components/Nav';
import NavPublic from '../components/NavPublic';
import withData from '../higher-order/withData';
import * as Strings from '../common/strings';
import * as Actions from '../common/actions';

class Post extends React.Component {
  state = {
    isEditing: false,
    content: this.props.post ? this.props.post.content : undefined,
    title: this.props.post ? this.props.post.title : undefined,
  };

  _handleEdit = () => {
    this.setState({ isEditing: true });
  };

  _handleCancel = () => {
    this.setState({
      isEditing: false,
      content: this.props.post.content,
      title: this.props.post.title,
    });
  };

  _handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  _handleContentChange = e => {
    this.setState({ content: e.target.value });
  };

  _handleSave = () => {
    this.props.dispatch(
      Actions.requestUpdatePost({
        postId: this.props.post.id,
        content: this.state.content,
        title: this.state.title,
      })
    );
  };

  _handleDelete = () => {
    this.props.dispatch(Actions.requestDeletePost(this.props.post.id));
  };

  render() {
    const navigation = !this.props.isAuthenticated ? <NavPublic /> : <Nav />;

    const { post, viewer } = this.props;
    if (!post) {
      return (
        <Document>
          <style jsx>{`
          .title {
            font-size: 2.618rem;
            font-weight: 600;
            cursor: pointer;
          }
        `}</style>
          {navigation}
          <ColumnLayout>
            <h1 className="title">Post not found</h1>
          </ColumnLayout>
        </Document>
      );
    }

    const { isEditing } = this.state;
    const isEditable = viewer && viewer.id === post.user.id;

    const commentForm = this.props.isAuthenticated
      ? <CommentForm
          postId={post.id}
          title="Reply to this post"
          placeholder="Leave a comment..."
        />
      : <div className="comments--unauthenticated">
          <style jsx>{`
            .comments--unauthenticated {
              border-top: 1px solid #ECECEC;
              padding: 48px 0 48px 0;
            }

            .item {
              color: #0000FF;
              cursor: pointer;
              text-decoration: underline;
              transition: color 200ms ease;

              &:hover {
                color: #1111AF;
              }

              &:visited {
                color: #0000FF;
              }
            }
          `}</style>
          To leave a comment,
          {' '}
          <a className="item" href="/">log in or create an account</a>.
        </div>;

    const maybeCommentElements = this.props.post.comments
      .filter(c => {
        return !c.commentId;
      })
      .map(c => (
        <CommentPreview
          key={`cmmt-${c.id}`}
          {...c}
          style={{ margin: '0 0 24px 0' }}
        />
      ));

    return (
      <Document>
        <style jsx>{`
          .title {
            font-size: 2.618rem;
            line-height: 2.8rem;
            font-weight: 600;
            overflow-wrap: break-word;
            white-space: pre-wrap;
          }

          .content {
            white-space: pre-wrap;
            overflow-wrap: break-word;
            margin-top: 2rem;
          }

          .comments {
            padding: 68px 0 0 0;
          }

          .actions {
            margin-bottom: 1rem;
          }
        `}</style>
        {navigation}
        <ColumnLayout>
          {isEditable
            ? <div className="actions">
                {!isEditing
                  ? <ButtonText
                      onClick={this._handleEdit}
                      style={{ margin: '0 16px 0 0' }}>
                      Edit Post
                    </ButtonText>
                  : undefined}
                {isEditing
                  ? <ButtonText
                      onClick={this._handleCancel}
                      style={{ margin: '0 16px 0 0' }}>
                      Cancel
                    </ButtonText>
                  : undefined}
                {isEditing
                  ? <ButtonText
                      onClick={this._handleSave}
                      style={{ margin: '0 16px 0 0' }}>
                      Save
                    </ButtonText>
                  : undefined}
                <ButtonText onClick={this._handleDelete}>
                  Delete
                </ButtonText>
              </div>
            : undefined}
          {isEditing
            ? <Textarea
                value={this.state.title}
                placeholder="Optional title"
                fontWeight={600}
                lineHeight="2.8rem"
                fontSize="2.618rem"
                onChange={this._handleTitleChange}
              />
            : <h1 className="title">{this.state.title}</h1>}
          <PostLockup
            style={{ margin: '16px 0 0 0' }}
            commentLength={post.comments.length}
            createdAt={post.createdAt}
            username={post.user.username}
          />
          {isEditing
            ? <Textarea
                value={this.state.content}
                placeholder="Start writing..."
                onChange={this._handleContentChange}
              />
            : undefined}
          {!isEditing
            ? <p className="content">{this.state.content}</p>
            : undefined}
          {!isEditing
            ? <div className="comments">
                {maybeCommentElements}
              </div>
            : undefined}
          {!isEditing ? commentForm : undefined}
        </ColumnLayout>
      </Document>
    );
  }
}

export default withData({}, state => state)(Post);
