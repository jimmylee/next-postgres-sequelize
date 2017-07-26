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

import { connect } from 'react-redux';
import styled, { css } from 'react-emotion';

const CommentReplyForm = styled('div')`
  padding: 0 0 0 16px;
`;

class CommentPreview extends React.Component {
  state = {
    isEditing: false,
    isReplying: false,
    content: this.props.content,
  };

  _handleView = () => {
    window.location.href = `/post/${this.props.postId}`;
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
    this.setState({ isEditing: false, content: this.props.content });
  };

  _handleContentChange = e => {
    this.setState({ content: e.target.value });
  };

  _handleSave = () => {
    this.props.dispatch(
      Actions.requestUpdateComment({
        postId: this.props.postId,
        content: this.state.content,
        commentId: this.props.id,
      })
    );
  };

  _handleDelete = commentId => {
    this.props.dispatch(
      Actions.requestDeleteComment({
        postId: this.props.postId,
        commentId,
      })
    );
  };

  render() {
    const { viewer, user, style, showResponse, post, postId, id } = this.props;
    const { isEditing, isReplying } = this.state;
    const isEditable = viewer && viewer.id === user.id;
    const isParent = !!this.props.commentId;

    let maybeReplyElements;
    if (this.props.replies) {
      maybeReplyElements = this.props.replies.map((r, index) => {
        const isReplyEditable = viewer && viewer.id === r.user.id;
        return (
          <CommentPreviewReply
            key={`{${r.id}-${index}}`}
            username={r.user.username}
            createdAt={r.createdAt}
            viewer={viewer}
            isEditable={isReplyEditable}
            isEditing={isEditing}
            onDelete={() => this._handleDelete(r.id)}>
            {r.content}
          </CommentPreviewReply>
        );
      });
    }

    const CommentPreviewContainer = css`
      margin: 0 0 48px 0;
    `;

    return (
      <div className={CommentPreviewContainer} style={style}>
        <CommentPreviewHeader
          viewer={viewer}
          onEdit={this._handleEdit}
          onCancel={this._handleCancel}
          onDelete={() => this._handleDelete(id)}
          isEditable={isEditable}
          isEditing={isEditing}>
          <LabelBold>{this.props.user.username} </LabelBold>
          commented on
          <LabelBold> {Strings.toDate(this.props.createdAt)}</LabelBold>
        </CommentPreviewHeader>
        <div className="content">
          {showResponse ? (
            <BorderedItem onClick={this._handleView}>
              In response to <LabelBold>“{post.title}”</LabelBold>
            </BorderedItem>
          ) : (
            undefined
          )}

          {!isEditing ? (
            <Text.PostBody style={{ margin: '16px 0 16px 0' }}>{this.state.content}</Text.PostBody>
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
            <CommentReplyForm>
              <CommentForm
                autoFocus
                title={
                  <span>
                    Leave a reply to <LabelBold>{this.props.user.username}</LabelBold>
                  </span>
                }
                placeholder="Leave a reply..."
                isReplying={isReplying}
                onCancel={this._handleCancelReply}
                postId={postId}
                commentId={id}
              />
            </CommentReplyForm>
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

export default connect(state => {
  return { viewer: state.viewer };
})(CommentPreview);
