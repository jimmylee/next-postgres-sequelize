import React from 'react';
import * as Strings from '../common/strings';

export default class PostLockup extends React.Component {
  render() {
    return (
      <aside className="container" style={this.props.style}>
        <style jsx>{`
          .container {
            font-size: 0.8rem;
            overflow-wrap: break-word;
            white-space: pre-wrap;
          }

          .bold {
            font-weight: 600;
          }
        `}</style>
        <p className="container">
          💬 {this.props.commentLength}
          {' '}
          {Strings.pluralize('comment', this.props.commentLength)}
          {' '}
          {' '}
          📝
          {' '}
          <span className="bold">{Strings.toDate(this.props.createdAt)}</span>
          {' '}
          by
          {' '}
          <span className="bold">{this.props.username}</span>
        </p>
      </aside>
    );
  }
}
