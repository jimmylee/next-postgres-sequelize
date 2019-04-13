import * as React from 'react';

import Document from '../components/Document';
import ColumnLayout from '../components/ColumnLayout';
import UserList from '../components/UserList';
import NavPublic from '../components/NavPublic';
import NavAuthenticated from '../components/NavAuthenticated';
import withData from '../higher-order/withData';

class Users extends React.Component {
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
          <UserList
            users={this.props.users}
            dispatch={this.props.dispatch}
            viewer={this.props.viewer}
          />
        </ColumnLayout>
      </Document>
    );
  }
}

export default withData({}, state => state)(Users);
