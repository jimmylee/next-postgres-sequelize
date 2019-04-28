import * as React from 'react';
import * as Text from '../components/Text';
import * as Strings from '../common/strings';

import Button from '../components/Button';
import PostLockup from '../components/PostLockup';

export default class PostPreview extends React.Component {
  _handleViewPost = id => {
    window.location.href = `/post/${id}`;
  };

  render() {
    const { post } = this.props;
    return (
      <div
        onClick={() => this._handleViewPost(post.id)}
        style={{ cursor: 'pointer', marginBottom: '48px' }}>
        <Text.Heading1>{post.title ? post.title : 'untitled'}</Text.Heading1>
        <PostLockup
          commentLength={post.comments.length}
          createdAt={post.createdAt}
          username={post.user.username}
        />
        <Text.PostBody style={{ marginTop: 24 }}>
          {Strings.elide(post.content, 256)}
          <br />
          <br />
          <Button>Read more</Button>
        </Text.PostBody>
      </div>
    );
  }
}
