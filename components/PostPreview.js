import React from 'react';
import ButtonText from '../components/ButtonText';
import PostLockup from '../components/PostLockup';
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
            margin-bottom: 32px;
            padding-bottom: 48px;
            cursor: pointer;
            transition: 200ms ease all;
            transition-property: box-shadow, transform, background;
            color: #000000;
            border-bottom: 1px solid #ECECEC;
          }

          .post:last-child {
            border-bottom: 0;
          }

          .title {
            font-size: 2.618rem;
            line-height: 2.9rem;
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
        <PostLockup
          style={{ margin: '16px 0 0 0' }}
          commentLength={post.comments.length}
          createdAt={post.createdAt}
          username={post.user.username}
        />
        <p className="content">
          {Strings.elide(post.content, 256)}
          <br />
          <br />
          <ButtonText>
            Read more...
          </ButtonText>
        </p>
      </div>
    );
  }
}
