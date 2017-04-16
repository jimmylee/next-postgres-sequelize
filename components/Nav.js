import React from 'react';
import Link from './Link';
import NavLayout from './NavLayout';
import * as Actions from '../common/actions';
import { connect } from 'react-redux';

class Nav extends React.Component {
  _handleLogout = () => {
    this.props.dispatch(Actions.requestLogout());
  };

  render() {
    return (
      <NavLayout>
        <Link className="link" href="/write">
          Write
        </Link>
        <Link className="link" href="/">
          Posts ({this.props.posts.length})
        </Link>
        <Link className="link" href="/comments">
          Comments ({this.props.comments.length})
        </Link>
        <Link className="link" href="/users">
          Users ({this.props.users.length})
        </Link>
        <Link className="link" onClick={this._handleLogout}>
          Logout
        </Link>
      </NavLayout>
    );
  }
}

export default connect(state => state)(Nav);
