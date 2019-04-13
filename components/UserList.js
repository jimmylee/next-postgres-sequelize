import * as React from 'react';

import UserPreview from '../components/UserPreview';

export default class UserList extends React.Component {
  render() {
    const users = this.props.users.map(user => (
      <UserPreview
        style={{ marginBottom: 16 }}
        key={`user-${user.id}`}
        viewer={this.props.viewer}
        dispatch={this.props.dispatch}
        user={user}
      />
    ));

    return <div>{users}</div>;
  }
}
