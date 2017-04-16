import React from 'react';
import UserPreview from '../components/UserPreview';

export default class UserList extends React.Component {
  render() {
    const users = this.props.users.map(u => (
      <UserPreview key={`user-${u.id}`} {...u} />
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
