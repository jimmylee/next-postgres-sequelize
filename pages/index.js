import React from 'react';
import Document from '../components/Document';
import ColumnLayout from '../components/ColumnLayout';
import AuthLoginForm from '../components/AuthLoginForm';
import AuthSignupForm from '../components/AuthSignupForm';
import NavPublic from '../components/NavPublic';
import PostList from '../components/PostList';
import Nav from '../components/Nav';
import withData from '../higher-order/withData';

class Index extends React.Component {
  renderLoggedIn = () => {
    return [
      <Nav key="navigation" />,
      <ColumnLayout key="layout">
        <PostList posts={this.props.posts} />
      </ColumnLayout>,
    ];
  };

  renderLoggedOut = () => {
    return [
      <NavPublic key="navigation" />,
      <ColumnLayout key="layout">
        <style jsx>{`
          .heading {
            font-size: 2.618rem;
            line-height: 2.8rem;
            font-weight: 600;
          }

          .heading-2 {
            margin: 2.125rem 0 1rem 0;
            font-size: 1.618rem;
            font-weight: 500;
          }

          .paragraph {
            margin-top: 1.125rem;
          }

          .link {
            color: #0000FF;
            cursor: pointer;
            text-decoration: underline;
            transition: color 200ms ease;

            &:hover {
              color: #1111AF;
            }
          }
        `}</style>

        <h1 className="heading">
          next-postgres
        </h1>
        <p className="paragraph">
          This project is an example of React + NextJS + Postgres. It is tailored for those who are enthusiastic about building websites with 100% JavaScript.
          {' '}<br /><br />
          <a
            className="link"
            target="blank"
            href="https://github.com/jimmylee/next-postgres">
            View next-postgres on GitHub
          </a>
          .
        </p>
        <p className="paragraph">
          If you like writing mobile applications with 100% JavaScript, there is an example powered by
          {' '}
          <a className="link" target="blank" href="https://expo.io">
            Expo
          </a>. You can open the <a
            className="link"
            target="blank"
            href="https://expo.io/@jimmylee/expo-next-postgres">
            project
          </a> with Expo Client. {' '}<br /><br />
          <a
            className="link"
            target="blank"
            href="https://github.com/jimmylee/expo-next-postgres">
            View expo-next-postgres on GitHub
          </a>
          .
        </p>
        <h2 className="heading-2">
          Log in
        </h2>
        <AuthLoginForm />
        <h2 className="heading-2">
          Create an account
        </h2>
        <AuthSignupForm />
      </ColumnLayout>,
    ];
  };

  render() {
    let subview = !this.props.isAuthenticated
      ? this.renderLoggedOut()
      : this.renderLoggedIn();

    return (
      <Document>
        {subview}
      </Document>
    );
  }
}

export default withData({}, state => state)(Index);
