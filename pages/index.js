import React from 'react';
import Document from '../components/Document';
import ColumnLayout from '../components/ColumnLayout';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import PublicNav from '../components/PublicNav';
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
      <PublicNav key="navigation" />,
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
          You are using an example of a React + NextJS + Postgres website. It is 💯 percent JavaScript. For more details about how you can clone and deploy your own, visit
          {' '}
          <a
            className="link"
            target="blank"
            href="https://github.com/jimmylee/next-postgres">
            next-postgres on GitHub
          </a>
          .
        </p>
        <p className="paragraph">
          There is also a 📱 mobile application powered by <a
            className="link"
            target="blank"
            href="https://expo.io">
            Expo
          </a>. You can open the project <a
            className="link"
            target="blank"
            href="https://expo.io/@jimmylee/expo-next-postgres">
            here
          </a>. To see the source code that project,{' '}
          <a
            className="link"
            target="blank"
            href="https://github.com/jimmylee/expo-next-postgres">
            view expo-next-postgres on GitHub
          </a>
          .
        </p>
        <h2 className="heading-2">
          🔐 Log in
        </h2>
        <LoginForm />
        <h2 className="heading-2">
          👥 Create an account
        </h2>
        <SignupForm />
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
