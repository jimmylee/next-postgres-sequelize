import React from 'react';
import PropTypes from 'prop-types';
import CommentPreview from '../components/CommentPreview';
import { connect } from 'react-redux';

class CommentList extends React.Component {
  static propTypes = {
    showResponse: PropTypes.bool,
  };

  render() {
    const comments = this.props.comments.map(c => (
      <CommentPreview
        key={`cmmt-${c.id}`}
        showResponse={this.props.showResponse}
        style={{ margin: '0 0 24px 0' }}
        {...c}
      />
    ));

    return (
      <div className="container">
        <style jsx>{`
          .container {
            box-sizing: border-box;
          }
        `}</style>
        {comments}
      </div>
    );
  }
}

export default connect(state => state)(CommentList);
