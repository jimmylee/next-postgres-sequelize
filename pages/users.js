import React from 'react';
import Document from '../components/Document';
import ColumnLayout from '../components/ColumnLayout';
import UserList from '../components/UserList';
import NavPublic from '../components/NavPublic';
import Nav from '../components/Nav';
import withData from '../higher-order/withData';

class Users extends React.Component {
  render() {
    let navigation = !this.props.isAuthenticated ? <NavPublic /> : <Nav />;
    return (
      <Document>
        {navigation}
        <ColumnLayout>
          <UserList users={this.props.users} />
        </ColumnLayout>
      </Document>
    );
  }
}

export default withData({}, state => state)(Users);
