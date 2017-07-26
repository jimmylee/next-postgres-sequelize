import * as React from 'react';
import * as Actions from '../common/actions';

import Link from '../components/Link';
import NavLayout from '../components/NavLayout';

import { connect } from 'react-redux';
import { css } from 'react-emotion';

const linkStyles = css`
  display: inline-block;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  color: #000000;

  :visited {
    color: #000000;
  }

  :hover {
    color: blue;
    text-decoration: underline;
  }
`;

class NavPublic extends React.Component {
  render() {
    return (
      <NavLayout>
        <Link className={linkStyles} href="/" style={{ marginRight: '24px' }}>
          Sign in
        </Link>
        <Link className={linkStyles} href="/posts" style={{ marginRight: '24px' }}>
          Posts ({this.props.posts.length})
        </Link>
        <Link className={linkStyles} href="/comments" style={{ marginRight: '24px' }}>
          Comments ({this.props.comments.length})
        </Link>
        <Link className={linkStyles} href="/users">
          Users ({this.props.users.length})
        </Link>
      </NavLayout>
    );
  }
}

export default connect(state => state)(NavPublic);
