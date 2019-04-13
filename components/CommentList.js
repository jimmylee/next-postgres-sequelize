import * as React from 'react';

import CommentPreview from '../components/CommentPreview';

export default class CommentList extends React.Component {
  render() {
    const comments = this.props.comments.map(c => (
      <CommentPreview
        style={{ marginBottom: 32 }}
        key={`cmmt-${c.id}`}
        viewer={this.props.viewer}
        showResponse={this.props.showResponse}
        dispatch={this.props.dispatch}
        comment={c}
      />
    ));

    return comments;
  }
}
