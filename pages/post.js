import * as React from 'react';
import * as Text from '../components/Text';
import * as Strings from '../common/strings';
import * as Actions from '../common/actions';

import Border from '../components/Border';
import Textarea from '../components/Textarea';
import Button from '../components/Button';
import Document from '../components/Document';
import CommentPreview from '../components/CommentPreview';
import ColumnLayout from '../components/ColumnLayout';
import CommentForm from '../components/CommentForm';
import PostLockup from '../components/PostLockup';
import NavAuthenticated from '../components/NavAuthenticated';
import NavPublic from '../components/NavPublic';
import withData from '../higher-order/withData';

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
    const navigation = !this.props.isAuthenticated ? (
      <NavPublic />
    ) : (
      <NavAuthenticated />
    );

    const { post, viewer } = this.props;
    if (!post) {
      return (
        <Document>
          {navigation}
          <ColumnLayout>
            <h1 className="title">Post not found</h1>
          </ColumnLayout>
        </Document>
      );
    }

    const { isEditing } = this.state;
    const isEditable = viewer && viewer.id === post.user.id;

    const commentForm = this.props.isAuthenticated ? (
      <CommentForm
        postId={post.id}
        title="Reply to this post"
        placeholder="Leave a comment..."
      />
    ) : (
      <div style={{ padding: `16px 0 16px 0` }}>
        To leave a comment,{' '}
        <Text.Anchor href="/">log in or create an account</Text.Anchor>.
      </div>
    );

    const maybeCommentElements = this.props.post.comments
      .filter(c => {
        return !c.commentId;
      })
      .map(c => (
        <CommentPreview
          viewer={this.props.viewer}
          key={`comment-${c.id}`}
          dispatch={this.props.dispatch}
          comment={c}
        />
      ));

    return (
      <Document>
        {navigation}
        <ColumnLayout>
          {isEditable ? (
            <div>
              {!isEditing ? (
                <Button onClick={this._handleEdit}>Edit Post</Button>
              ) : (
                undefined
              )}
              {isEditing ? (
                <Button onClick={this._handleCancel}>Cancel</Button>
              ) : (
                undefined
              )}
              {isEditing ? (
                <Button onClick={this._handleSave}>Save</Button>
              ) : (
                undefined
              )}
              <Button onClick={this._handleDelete}>Delete</Button>
            </div>
          ) : (
            undefined
          )}
          {isEditing ? (
            <Textarea
              value={this.state.title}
              placeholder="Optional title"
              fontWeight={600}
              lineHeight="2.8rem"
              fontSize="2.618rem"
              onChange={this._handleTitleChange}
            />
          ) : (
            <Text.Heading1>{this.state.title}</Text.Heading1>
          )}
          <PostLockup
            commentLength={post.comments.length}
            createdAt={post.createdAt}
            username={post.user.username}
          />
          {isEditing ? (
            <Textarea
              value={this.state.content}
              placeholder="Start writing..."
              onChange={this._handleContentChange}
            />
          ) : (
            undefined
          )}
          {!isEditing ? (
            <Text.PostBody style={{ margin: '16px 0 88px 0' }}>
              {this.state.content}
            </Text.PostBody>
          ) : (
            undefined
          )}
          {!isEditing ? <div>{maybeCommentElements}</div> : undefined}
          <Border />
          {!isEditing ? commentForm : undefined}
        </ColumnLayout>
      </Document>
    );
  }
}

export default withData({}, state => state)(Post);
