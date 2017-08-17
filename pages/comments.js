import React from 'react';
import CommentList from '../components/CommentList';
import Document from '../components/Document';
import ColumnLayout from '../components/ColumnLayout';
import Nav from '../components/Nav';
import NavPublic from '../components/NavPublic';
import withData from '../higher-order/withData';

class Comments extends React.Component {
  render() {
    let navigation = !this.props.isAuthenticated ? <NavPublic /> : <Nav />;

    return (
      <Document>
        {navigation}
        <ColumnLayout>
          <CommentList showResponse comments={this.props.comments} />
        </ColumnLayout>
      </Document>
    );
  }
}

export default withData({}, state => state)(Comments);
