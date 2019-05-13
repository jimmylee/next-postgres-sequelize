import * as React from 'react';
import * as Text from '../components/Text';
import * as Actions from '../common/actions';
import * as Strings from '../common/strings';

import Button from '../components/Button';
import LabelBold from '../components/LabelBold';
import BorderedItem from '../components/BorderedItem';
import Textarea from '../components/Textarea';
import CommentPreviewHeader from '../components/CommentPreviewHeader';
import CommentPreviewReply from '../components/CommentPreviewReply';
import CommentForm from '../components/CommentForm';

export default class CommentPreview extends React.Component {
  state = {
    isEditing: false,
    isReplying: false,
    content: this.props.comment.content,
  };

  _handleView = () => {
    window.location.href = `/post/${this.props.comment.postId}`;
  };

  _handleReply = () => {
    this.setState({ isReplying: true });
  };

  _handleCancelReply = () => {
    this.setState({ isReplying: false });
  };

  _handleEdit = () => {
    this.setState({ isEditing: true });
  };

  _handleCancel = () => {
    this.setState({ isEditing: false, content: this.props.comment.content });
  };

  _handleContentChange = e => {
    this.setState({ content: e.target.value });
  };

  _handleSave = () => {
    this.props.dispatch(
      Actions.requestUpdateComment({
        postId: this.props.comment.postId,
        content: this.state.content,
        commentId: this.props.comment.id,
      })
    );
  };

  _handleDelete = commentId => {
    this.props.dispatch(
      Actions.requestDeleteComment({
        postId: this.props.comment.postId,
        commentId,
      })
    );
  };

  render() {
    const { comment, viewer, style, showResponse } = this.props;
    const { isEditing, isReplying } = this.state;
    const isEditable = viewer && viewer.id === comment.user.id;
    const isParent = !!this.props.comment.commentId;

    let maybeReplyElements;
    if (comment.replies) {
      maybeReplyElements = comment.replies.map((r, index) => {
        const isReplyEditable = viewer && viewer.id === r.user.id;
        return (
          <CommentPreviewReply
            key={`{${r.id}-${index}}`}
            username={r.user.username}
            createdAt={r.createdAt}
            updatedAt={r.updatedAt}
            viewer={viewer}
            isEditable={isReplyEditable}
            isEditing={isEditing}
            onDelete={() => this._handleDelete(r.id)}>
            {r.content}
          </CommentPreviewReply>
        );
      });
    }

    return (
      <div style={{ marginBottom: 48, ...style }}>
        <CommentPreviewHeader
          viewer={viewer}
          onEdit={this._handleEdit}
          onCancel={this._handleCancel}
          onDelete={() => this._handleDelete(comment.id)}
          isEditable={isEditable}
          isEditing={isEditing}>
          <LabelBold>{comment.user.username} </LabelBold>
          commented on
          <LabelBold> {Strings.toDate(comment.createdAt)}</LabelBold>
        </CommentPreviewHeader>
        <div>
          {showResponse ? (
            <BorderedItem onClick={this._handleView}>
              In response to <LabelBold>“{comment.post.title}”</LabelBold>
            </BorderedItem>
          ) : (
            undefined
          )}

          {!isEditing ? (
            <Text.PostBody style={{ margin: '16px 0 16px 0' }}>
              {this.state.content}
            </Text.PostBody>
          ) : (
            <Textarea
              autoFocus
              value={this.state.content}
              fontSize="14px"
              onChange={this._handleContentChange}
            />
          )}

          {maybeReplyElements}

          {isReplying ? (
            <div style={{ marginLeft: 16 }}>
              <CommentForm
                autoFocus
                title={
                  <span>
                    Leave a reply to{' '}
                    <LabelBold>{comment.user.username}</LabelBold>
                  </span>
                }
                placeholder="Leave a reply..."
                isReplying={isReplying}
                onCancel={this._handleCancelReply}
                postId={comment.postId}
                commentId={comment.id}
              />
            </div>
          ) : (
            undefined
          )}

          {viewer ? (
            <div>
              {!isParent && !isReplying && !isEditing ? (
                <Button onClick={this._handleReply}>Reply</Button>
              ) : (
                undefined
              )}
              {isEditable && isEditing ? (
                <Button onClick={this._handleSave}>Save</Button>
              ) : (
                undefined
              )}
            </div>
          ) : (
            undefined
          )}
        </div>
      </div>
    );
  }
}
