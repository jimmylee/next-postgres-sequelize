import * as React from 'react';

import Head from 'next/head';
import { css, Global } from '@emotion/core'

class Document extends React.Component {
  static defaultProps = {
    title: 'Next-postgres',
    description:
      'This is an example of a forum web application with posts and comments. It is built with NextJS, Postgres, has local authentication, and deploys easily to Heroku or Zeit.',
  };

  render() {
    return (
      <React.Fragment>
        <Global
          styles={css`
            html, body, div, span, applet, object, iframe,
            h1, h2, h3, h4, h5, h6, p, blockquote, pre,
            a, abbr, acronym, address, big, cite, code,
            del, dfn, em, img, ins, kbd, q, s, samp,
            small, strike, strong, sub, sup, tt, var,
            b, u, i, center,
            dl, dt, dd, ol, ul, li,
            fieldset, form, label, legend,
            table, caption, tbody, tfoot, thead, tr, th, td,
            article, aside, canvas, details, embed,
            figure, figcaption, footer, header, hgroup,
            menu, nav, output, ruby, section, summary,
            time, mark, audio, video {
              box-sizing: border-box;
              margin: 0;
              padding: 0;
              border: 0;
              vertical-align: baseline;
            }

            article, aside, details, figcaption, figure,
            footer, header, hgroup, menu, nav, section {
              display: block;
            }

            html, body {
              font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica,
              ubuntu, roboto, noto, segoe ui, arial, sans-serif;
              font-size: 16px;
            }
          `}
        />
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
      </React.Fragment>
    );
  }
}

export default Document;
