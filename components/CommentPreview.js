import React from 'react';
import Textarea from '../components/Textarea';
import { connect } from 'react-redux';
import * as Actions from '../common/actions';
import * as Strings from '../common/strings';

class CommentPreview extends React.Component {
  state = {
    isEditing: false,
    content: this.props.content,
  };

  _handleView = () => {
    window.location.href = `/post/${this.props.postId}`;
  };

  _handleEdit = () => {
    this.setState({ isEditing: true });
  };

  _handleCancel = () => {
    this.setState({ isEditing: false, content: this.props.content });
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

  _handleContentChange = e => {
    this.setState({ content: e.target.value });
  };

  _handleDelete = () => {
    this.props.dispatch(
      Actions.requestDeleteComment({
        postId: this.props.postId,
        commentId: this.props.id,
      })
    );
  };

  render() {
    const { viewer, User } = this.props;
    const { isEditing } = this.state;
    const isEditable = viewer && viewer.id === User.id;
    const classes = `container ${isEditing ? 'container--editing' : undefined}`;

    return (
      <div className={classes}>
        <style jsx>{`
          .container {
            margin: 0 auto 48px auto;
            padding: 16px;
            border: 1px solid #ECECEC;
            font-size: 14px;
            box-sizing: border-box;
            white-space: pre-wrap;
            overflow-wrap: break-word;
          }

          .container--editing {
            border: 2px solid blue;
            box-shadow: 4px 4px 0 blue;
          }

          .item {
            margin-right: 16px;
            cursor: pointer;
            text-decoration: underline;
          }

          .actions {
            margin: 0 0 0 0;
            font-size: 12px;
          }

          .username {
            font-size: 12px;
            font-weight: 600;
            margin: 48px 0 4px 0;
          }

          .date {
            font-size: 12px;
            margin-bottom: 8px;
          }
        `}</style>
        <div>
          {!isEditing
            ? <p onClick={this._handleView}>
                {this.state.content}
              </p>
            : undefined}
          {isEditing
            ? <Textarea
                value={this.state.content}
                onChange={this._handleContentChange}
              />
            : undefined}
          <div className="username">
            {this.props.User.username}
          </div>
          <div className="date">
            {Strings.toDate(this.props.createdAt)}
          </div>
          {isEditable
            ? <div className="actions">
                {!isEditing
                  ? <span className="item" onClick={this._handleEdit}>
                      Edit Comment
                    </span>
                  : undefined}
                {isEditing
                  ? <span className="item" onClick={this._handleSave}>
                      Save
                    </span>
                  : undefined}
                {isEditing
                  ? <span className="item" onClick={this._handleCancel}>
                      Cancel
                    </span>
                  : undefined}
                <span className="item" onClick={this._handleDelete}>
                  Delete
                </span>
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
