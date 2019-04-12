import * as React from 'react';
import * as Actions from '../common/actions';

import { connect } from 'react-redux';
import styled from '@emotion/styled';

import Link from '../components/Link';
import NavLayout from '../components/NavLayout';

const StyledLink = styled(Link)`
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

class Nav extends React.Component {
  _handleLogout = () => {
    this.props.dispatch(Actions.requestLogout());
  };

  render() {
    return (
      <NavLayout>
        <StyledLink href="/write" style={{ marginRight: '24px' }}>
          Write
        </StyledLink>
        <StyledLink href="/" style={{ marginRight: '24px' }}>
          Posts ({this.props.posts.length})
        </StyledLink>
        <StyledLink href="/comments" style={{ marginRight: '24px' }}>
          Comments ({this.props.comments.length})
        </StyledLink>
        <StyledLink href="/users" style={{ marginRight: '24px' }}>
          Users ({this.props.users.length})
        </StyledLink>
        <StyledLink onClick={this._handleLogout}>Log out</StyledLink>
      </NavLayout>
    );
  }
}

export default connect(state => state)(Nav);
