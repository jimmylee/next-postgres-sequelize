import React from 'react';
import PostPreview from './PostPreview';
import { connect } from 'react-redux';

class PostList extends React.Component {
  render() {
    const posts = this.props.posts.map(p => (
      <PostPreview key={`post-${p.id}`} post={p} />
    ));

    return (
      <div className="container">
        <style jsx>{`
          .container {
            box-sizing: border-box;
          }
        `}</style>
        {posts}
      </div>
    );
  }
}

export default connect(state => state)(PostList);
