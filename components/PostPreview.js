import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../common/actions';
import * as Strings from '../common/strings';

export default class PostPreview extends React.Component {
  _handleViewPost = id => {
    window.location.href = `/post/${id}`;
  };

  render() {
    const { post } = this.props;
    return (
      <div className="post" onClick={() => this._handleViewPost(post.id)}>
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

          .bold {
            font-weight: 600;
          }
        `}</style>
        <h1 className="title">
          {post.title ? post.title : 'untitled'}
        </h1>
        <p className="meta">
          💬 {post.comments.length}
          {' '}
          {Strings.pluralize('comment', post.comments.length)}
          {' '}
          {' '}
          📝
          {' '}
          <span className="bold">{Strings.toDate(post.createdAt)}</span>
          {' '}
          by
          {' '}
          <span className="bold">{post.User.username}</span>
        </p>
        <p className="content">
          {Strings.elide(post.content)}
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
