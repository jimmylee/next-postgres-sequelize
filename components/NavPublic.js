import * as React from 'react';

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

class NavPublic extends React.Component {
  render() {
    return (
      <NavLayout>
        <StyledLink href="/" style={{ marginRight: '24px' }}>
          Sign in
        </StyledLink>
        <StyledLink href="/posts" style={{ marginRight: '24px' }}>
          Posts ({this.props.posts.length})
        </StyledLink>
        <StyledLink href="/comments" style={{ marginRight: '24px' }}>
          Comments ({this.props.comments.length})
        </StyledLink>
        <StyledLink href="/users">Users ({this.props.users.length})</StyledLink>
      </NavLayout>
    );
  }
}

export default connect(state => state)(NavPublic);
