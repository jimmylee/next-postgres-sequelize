import React from 'react';
import PropTypes from 'prop-types';
import Textarea from './Textarea';
import Button from './Button';
import * as Actions from '../common/actions';
import { connect } from 'react-redux';

class CommentList extends React.Component {
  static defaultProps = {
    postId: PropTypes.string,
  };

  state = {
    content: '',
  };

  _handleContentChange = e => {
    this.setState({ content: e.target.value });
  };

  _handleSendComment = e => {
    this.props.dispatch(
      Actions.requestSaveComment({
        content: this.state.content,
        postId: this.props.postId,
      })
    );
  };

  render() {
    return (
      <div className="container">
        <style jsx>{`
          .comment {
            width: 100%;
            position: relative;
            border: 2px solid #000000;
            box-shadow: 4px 4px 0 #000000;
            padding: 16px;
            box-sizing: border-box;
            margin: 0 0 48px 0;
          }
        `}</style>
        <div className="comment">
          <Textarea
            label="comment"
            placeholder="Leave a comment..."
            value={this.state.content}
            onChange={this._handleContentChange}
          />
        </div>
        <Button onClick={this._handleSendComment}>
          Submit
        </Button>
      </div>
    );
  }
}

export default connect(state => state)(CommentList);
