import * as React from 'react';

import { Provider, connect } from 'react-redux';
import { initStore } from '../common/store';

const storeKey = '__NEXT_REDUX_STORE__';

const getInitialStateData = async ctx => {
  const users = ctx.query.users;
  const posts = ctx.query.posts;
  const comments = ctx.query.comments;

  let post;
  if (ctx.query && ctx.query.id && posts) {
    post = posts.find(p => {
      return `${p.id}` === ctx.query.id;
    });
  }

  return {
    post,
    users: users ? users : [],
    posts: posts ? posts : [],
    comments: comments ? comments : [],
    isAuthenticated: ctx.req.isAuthenticated(),
    viewer: ctx.req.user,
  };
};

const initializeReduxStore = (ctx, initialState) => {
  const { req } = ctx;

  if (!process.browser) {
    if (!req._store) {
      req._store = initStore(initialState);
    }

    return req._store;
  }

  if (!window[storeKey]) {
    window[storeKey] = initStore(initialState);
  }

  return window[storeKey];
};

const composeComponentWithData = (
  options,
  mapStateToProps
) => ComposedComponent => {
  const connectedComponent = connect.apply(null, [mapStateToProps])(
    ComposedComponent
  );

  return class WithDataHigherOrder extends React.Component {
    static async getInitialProps(ctx) {
      let initialState = { ...options.state };

      if (ctx.req) {
        initialState = { ...initialState, ...(await getInitialStateData(ctx)) };
      }

      const store = initializeReduxStore(ctx, initialState);

      return {
        store,
        initialProps: ComposedComponent.getInitialProps
          ? await ComposedComponent.getInitialProps(ctx)
          : {},
        initialState,
      };
    }

    render() {
      const { initialState, initialProps, store } = this.props;

      const hasStore = store && store.dispatch && store.getState;
      const providerStore = hasStore
        ? this.props.store
        : initializeReduxStore({}, initialState);

      return (
        <Provider store={providerStore}>
          {React.createElement(connectedComponent, initialProps)}
        </Provider>
      );
    }
  };
};

const withData = (options = {}, mapStateToProps) =>
  composeComponentWithData(options, mapStateToProps);

export default withData;
