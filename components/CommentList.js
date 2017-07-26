import * as React from 'react';

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
