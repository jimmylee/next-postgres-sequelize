import React from 'react';
import Textarea from '../components/Textarea';
import Document from '../components/Document';
import CommentPreview from '../components/CommentPreview';
import ColumnLayout from '../components/ColumnLayout';
import CommentForm from '../components/CommentForm';
import PublicNav from '../components/PublicNav';
import Nav from '../components/Nav';
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
    const navigation = !this.props.isAuthenticated ? <PublicNav /> : <Nav />;

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
    const isEditable = viewer && viewer.id === post.User.id;

    const commentForm = this.props.isAuthenticated
      ? <CommentForm postId={post.id} />
      : undefined;
    const comments = this.props.post.comments.map(c => (
      <CommentPreview key={`cmmt-${c.id}`} {...c} />
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

          .meta {
            font-size: 0.8rem;
            margin: 16px 0 0 0;
            overflow-wrap: break-word;
            white-space: pre-wrap;
          }

          .content {
            white-space: pre-wrap;
            overflow-wrap: break-word;
            margin-top: 2rem;
          }

          .comments {
            padding: 68px 0 24px 0;
          }

          .item {
            margin-right: 16px;
            font-size: 12px;
            text-decoration: underline;
            cursor: pointer;
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
                  ? <span className="item" onClick={this._handleEdit}>
                      Edit Post
                    </span>
                  : undefined}
                {isEditing
                  ? <span className="item" onClick={this._handleCancel}>
                      Cancel
                    </span>
                  : undefined}
                {isEditing
                  ? <span className="item" onClick={this._handleSave}>
                      Save
                    </span>
                  : undefined}
                <span className="item" onClick={this._handleDelete}>
                  Delete
                </span>
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
            : undefined}
          {!isEditing
            ? <h1 className="title">{this.state.title}</h1>
            : undefined}
          <p className="meta">
            by
            {' '}
            {post.User.username}
            {' '}
            on
            {' '}
            {Strings.toDate(post.createdAt)}
          </p>
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
                {comments}
              </div>
            : undefined}
          {!isEditing ? commentForm : undefined}
        </ColumnLayout>
      </Document>
    );
  }
}

export default withData({}, state => state)(Post);
