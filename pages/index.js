import * as React from 'react';
import * as Text from '../components/Text';

import Document from '../components/Document';
import ColumnLayout from '../components/ColumnLayout';
import AuthLoginForm from '../components/AuthLoginForm';
import AuthSignupForm from '../components/AuthSignupForm';
import NavPublic from '../components/NavPublic';
import PostList from '../components/PostList';
import NavAuthenticated from '../components/NavAuthenticated';
import withData from '../higher-order/withData';

class Index extends React.Component {
  renderLoggedIn = () => {
    return [
      <NavAuthenticated key="navigation" />,
      <ColumnLayout key="layout">
        <PostList posts={this.props.posts} />
      </ColumnLayout>,
    ];
  };

  renderLoggedOut = () => {
    return [
      <NavPublic key="navigation" />,
      <ColumnLayout key="layout">
        <Text.PageTitle>next-postgres</Text.PageTitle>
        <Text.Paragraph>
          This project is an example of React + NextJS + Postgres. It is
          tailored for those who are enthusiastic about building websites with
          100% JavaScript. It is designed in a way that makes you want to change
          it and very easy to change. <br />
          <br />
          <Text.Anchor
            target="blank"
            href="https://github.com/jimmylee/next-postgres"
            style={{ marginBottom: '24px', display: 'block' }}>
            View next-postgres on GitHub
          </Text.Anchor>
        </Text.Paragraph>
        <Text.PageTitle>Log in</Text.PageTitle>
        <AuthLoginForm style={{ marginBottom: 24 }} />
        <Text.PageTitle>Create an account</Text.PageTitle>
        <AuthSignupForm style={{ marginBottom: 24 }} />
      </ColumnLayout>,
    ];
  };

  render() {
    let subview = !this.props.isAuthenticated
      ? this.renderLoggedOut()
      : this.renderLoggedIn();

    return <Document>{subview}</Document>;
  }
}

export default withData({}, state => state)(Index);
