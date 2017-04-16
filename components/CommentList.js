import React from 'react';
import CommentPreview from './CommentPreview';
import { connect } from 'react-redux';

class CommentList extends React.Component {
  render() {
    const comments = this.props.comments.map(c => (
      <CommentPreview key={`cmmt-${c.id}`} {...c} />
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
