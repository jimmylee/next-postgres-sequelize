import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { initStore } from '../common/store';
import * as HTTP from '../common/http';

const skipMerge = ['initialState', 'initialProps', 'isServer', 'store'];
const storeKey = '__NEXT_REDUX_STORE__';

const getInitialStateData = async ctx => {
  const usersRequest = await HTTP.getAllUsers();
  const users = await usersRequest.json();

  const postsRequest = await HTTP.getAllPosts();
  const posts = await postsRequest.json();

  const commentsRequest = await HTTP.getAllComments();
  const comments = await commentsRequest.json();

  let post;
  if (ctx.query) {
    post = posts.find(p => {
      return `${p.id}` === ctx.query.id;
    });
  }

  return {
    post,
    users,
    posts,
    comments,
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

  return class WithDataHigherOrder extends Component {
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

      const mergedProps = {};

      Object.keys(this.props).forEach(p => {
        if (!~skipMerge.indexOf(p)) {
          mergedProps[p] = this.props[p];
        }
      });

      Object.keys(initialProps).forEach(p => {
        mergedProps[p] = initialProps[p];
      });

      return (
        <Provider store={providerStore}>
          {React.createElement(connectedComponent, mergedProps)}
        </Provider>
      );
    }
  };
};

const withData = (options = {}, mapStateToProps) =>
  composeComponentWithData(options, mapStateToProps);

export default withData;
