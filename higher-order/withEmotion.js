import * as React from 'react';

import { hydrate, injectGlobal } from 'react-emotion';

const injectGlobalStyles = () => injectGlobal`
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
`;

export default () => ComposedComponent => {
  class withEmotion extends React.Component {
    constructor() {
      super();

      if (typeof window !== 'undefined') {
        hydrate(window.__NEXT_DATA__.ids);
      }
    }

    render() {
      injectGlobalStyles();

      return <ComposedComponent {...this.props} />;
    }
  }

  return withEmotion;
};
