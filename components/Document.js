import * as React from 'react';

import Head from 'next/head';
import withEmotion from '../higher-order/withEmotion';

class Document extends React.Component {
  static defaultProps = {
    title: 'Next-postgres',
    description:
      'This is an example of a forum web application with posts and comments. It is built with NextJS, Postgres, has local authentication, and deploys easily to Heroku or Zeit.',
  };

  render() {
    return (
      <div>
        <Head>
          <title>{this.props.title}</title>
          <meta name="description" content={this.props.description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="UTF-8" />
          <meta name="sourceApp" content="mobileWeb" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <link rel="shortcut icon" href="/static/favicon.png" />
        </Head>
        {this.props.children}
      </div>
    );
  }
}

export default withEmotion()(Document);
