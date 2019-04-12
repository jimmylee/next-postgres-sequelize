import * as React from 'react';

import { connect } from 'react-redux';

import PostPreview from '../components/PostPreview';

class PostList extends React.Component {
  render() {
    const posts = this.props.posts.map(p => (
      <PostPreview key={`post-${p.id}`} post={p} />
    ));

    return <div>{posts}</div>;
  }
}

export default connect(state => state)(PostList);
