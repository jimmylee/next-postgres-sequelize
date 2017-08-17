import React from 'react';
import Button from '../components/Button';
import ButtonText from '../components/ButtonText';
import Textarea from '../components/Textarea';
import CommentPreviewHeader from '../components/CommentPreviewHeader';
import CommentPreviewReply from '../components/CommentPreviewReply';
import CommentForm from '../components/CommentForm';
import { connect } from 'react-redux';
import * as Actions from '../common/actions';
import * as Strings from '../common/strings';

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
            onDelete={() => this._handleDelete(r.id)}
            style={{ margin: '16px 0 16px 0' }}>
            {r.content}
          </CommentPreviewReply>
        );
      });
    }

    return (
      <div className="container" style={style}>
        <style jsx>{`
          .container {
            margin: 0 auto 0 auto;
            font-size: 14px;
            box-sizing: border-box;
            white-space: pre-wrap;
            overflow-wrap: break-word;
          }

          .content {
            padding: 16px;
            border-right: 1px solid #2e2f30;
            border-left: 1px solid #2e2f30;
            border-bottom: 1px solid #2e2f30;
          }

          .text {
            margin-bottom: 48px;
          }

          .actions {
            margin: 24px 0 0 0;
            font-size: 12px;
          }

          .response {
            margin-bottom: 16px;
          }

          .bold {
            font-weight: 600;
          }
        `}</style>
        <CommentPreviewHeader
          viewer={viewer}
          onEdit={this._handleEdit}
          onCancel={this._handleCancel}
          onDelete={() => this._handleDelete(id)}
          isEditable={isEditable}
          isEditing={isEditing}
          style={{ background: isEditing ? 'blue' : '#2e2f30' }}>
          <span className="bold">{this.props.user.username}{' '}</span>
          commented on
          <span className="bold">
            {' '}{Strings.toDate(this.props.createdAt)}
          </span>
        </CommentPreviewHeader>
        <div className="content">
          {showResponse
            ? <blockquote className="response" onClick={this._handleView}>
                📮 In response to
                {' '}
                <span className="title">“{post.title}”</span>
              </blockquote>
            : undefined}

          {!isEditing
            ? <p className="text">
                {this.state.content}
              </p>
            : <Textarea
                autoFocus
                value={this.state.content}
                fontSize="14px"
                onChange={this._handleContentChange}
              />}

          {maybeReplyElements}

          {isReplying
            ? <CommentForm
                autoFocus
                title={
                  <span>
                    Leave a reply to
                    {' '}
                    <span className="bold">{this.props.user.username}</span>
                  </span>
                }
                placeholder="Leave a reply..."
                isReplying={isReplying}
                onCancel={this._handleCancelReply}
                postId={postId}
                commentId={id}
                style={{ margin: '16px 0 0 0' }}
              />
            : undefined}

          {viewer
            ? <div className="actions">
                {!isParent && !isReplying && !isEditing
                  ? <ButtonText
                      onClick={this._handleReply}
                      style={{ margin: '0 16px 0 0' }}>
                      Reply
                    </ButtonText>
                  : undefined}
                {isEditable && isEditing
                  ? <ButtonText onClick={this._handleSave}>
                      Save
                    </ButtonText>
                  : undefined}
              </div>
            : undefined}
        </div>
      </div>
    );
  }
}

export default connect(state => {
  return { viewer: state.viewer };
})(CommentPreview);
