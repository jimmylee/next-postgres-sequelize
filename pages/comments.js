import React from 'react';
import CommentList from '../components/CommentList';
import Document from '../components/Document';
import ColumnLayout from '../components/ColumnLayout';
import PublicNav from '../components/PublicNav';
import Nav from '../components/Nav';
import withData from '../higher-order/withData';

class Comments extends React.Component {
  render() {
    let navigation = !this.props.isAuthenticated ? <PublicNav /> : <Nav />;

    return (
      <Document>
        {navigation}
        <ColumnLayout>
          <CommentList comments={this.props.comments} />
        </ColumnLayout>
      </Document>
    );
  }
}

export default withData({}, state => state)(Comments);
