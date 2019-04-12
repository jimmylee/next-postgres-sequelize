import * as React from 'react';

import { connect } from 'react-redux';

import CommentPreview from '../components/CommentPreview';

class CommentList extends React.Component {
  render() {
    const comments = this.props.comments.map(c => (
      <CommentPreview
        style={{ marginBottom: 32 }}
        key={`cmmt-${c.id}`}
        showResponse={this.props.showResponse}
        {...c}
      />
    ));

    return <div className="container">{comments}</div>;
  }
}

export default connect(state => state)(CommentList);
