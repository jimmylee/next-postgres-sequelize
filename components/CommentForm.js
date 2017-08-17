import React from 'react';
import PropTypes from 'prop-types';
import Textarea from '../components/Textarea';
import ButtonText from '../components/ButtonText';
import * as Actions from '../common/actions';
import { connect } from 'react-redux';
import { DeleteIcon } from '../common/svg';

class CommentList extends React.Component {
  static defaultProps = {
    postId: PropTypes.string,
    commentId: PropTypes.string,
    title: PropTypes.string,
  };

  state = {
    content: '',
  };

  _handleContentChange = e => {
    this.setState({ content: e.target.value });
  };

  _handleSend = e => {
    const data = {
      commentId: this.props.commentId,
      content: this.state.content,
      postId: this.props.postId,
    };

    if (this.props.commentId) {
      return this.props.dispatch(Actions.requestSaveReply(data));
    }

    return this.props.dispatch(Actions.requestSaveComment(data));
  };

  render() {
    return (
      <div className="container" style={{ margin: '24px 0 0 0' }}>
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
            border-right: 1px solid blue;
            border-left: 1px solid blue;
            border-bottom: 1px solid blue;
          }

          .header {
            min-height: 44px;
            background: blue;
            color: #FFFFFF;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 16px 0 16px;
          }

          .header-left {
            min-width: 25%;
            width: 100%;
            padding: 8px 0 8px 0;
          }

          .header-right {
            padding-left: 16px;
            flex-shrink: 0;
          }
        `}</style>
        <header className="header">
          <div className="header-left">
            {this.props.title}
          </div>
          <div className="header-right">
            {this.props.isReplying
              ? <DeleteIcon interactionStyle onClick={this.props.onCancel} />
              : undefined}
          </div>
        </header>
        <div className="content">
          <Textarea
            autoFocus={this.props.autoFocus}
            label="comment"
            placeholder={this.props.placeholder}
            value={this.state.content}
            onChange={this._handleContentChange}
          />
          <div className="actions">
            <ButtonText onClick={this._handleSend}>
              Submit
            </ButtonText>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => state)(CommentList);
