import React from 'react';
import UserPreview from '../components/UserPreview';

export default class UserList extends React.Component {
  render() {
    const users = this.props.users.map(user => (
      <UserPreview
        key={`user-${user.id}`}
        style={{ margin: '0 0 24px 0' }}
        user={user}
      />
    ));

    return (
      <div className="container">
        <style jsx>{`
          .container {
            box-sizing: border-box;
          }
        `}</style>
        {users}
      </div>
    );
  }
}
