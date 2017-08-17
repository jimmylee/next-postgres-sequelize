import React from 'react';
import Link from '../components/Link';
import NavLayout from '../components/NavLayout';
import * as Actions from '../common/actions';
import { connect } from 'react-redux';

class NavPublic extends React.Component {
  render() {
    return (
      <NavLayout>
        <Link className="link" href="/">
          Sign in
        </Link>
        <Link className="link" href="/posts">
          Posts ({this.props.posts.length})
        </Link>
        <Link className="link" href="/comments">
          Comments ({this.props.comments.length})
        </Link>
        <Link className="link" href="/users">
          Users ({this.props.users.length})
        </Link>
      </NavLayout>
    );
  }
}

export default connect(state => state)(NavPublic);
