import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../common/actions';
import * as Strings from '../common/strings';

class PostPreview extends React.Component {
  _handleViewPost = id => {
    window.location.href = `/post/${id}`;
  };

  render() {
    return (
      <div className="post" onClick={() => this._handleViewPost(this.props.id)}>
        <style jsx>{`
          .post {
            margin-bottom: 48px;
            cursor: pointer;
            transition: 200ms ease all;
            transition-property: box-shadow, transform, background;
            color: #000000;
          }

          .meta {
            font-size: 0.8rem;
            margin: 16px 0 0 0;
            overflow-wrap: break-word;
            white-space: pre-wrap;
          }

          .title {
            font-size: 2.618rem;
            line-height: 2.8rem;
            margin-top: 16px;
            padding-right: 64px;
            font-weight: 600;
            overflow-wrap: break-word;
            white-space: pre-wrap;
          }

          .content {
            margin-top: 2rem;
            overflow-wrap: break-word;
            white-space: pre-wrap;
          }
        `}</style>
        <h1 className="title">
          {this.props.title ? this.props.title : 'untitled'}
        </h1>
        <p className="meta">
          by
          {' '}
          {this.props.User.username}
          {' '}
          on
          {' '}
          {Strings.toDate(this.props.createdAt)}
        </p>
        <p className="content">
          {Strings.elide(this.props.content)}
          <br />
          <br />
          <span>
            →
          </span>
        </p>
      </div>
    );
  }
}

export default connect(state => state)(PostPreview);
