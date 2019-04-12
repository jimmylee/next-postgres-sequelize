import * as React from 'react';

import Document from '../components/Document';
import ColumnLayout from '../components/ColumnLayout';
import NavPublic from '../components/NavPublic';
import PostList from '../components/PostList';
import NavAuthenticated from '../components/NavAuthenticated';
import withData from '../higher-order/withData';

class Posts extends React.Component {
  render() {
    let navigation = !this.props.isAuthenticated ? (
      <NavPublic />
    ) : (
      <NavAuthenticated />
    );

    return (
      <Document>
        {navigation}
        <ColumnLayout>
          <PostList posts={this.props.posts} />
        </ColumnLayout>
      </Document>
    );
  }
}

export default withData({}, state => state)(Posts);
