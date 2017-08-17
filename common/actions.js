import * as HTTP from '../common/http';

const exception = error => {
  throw new Error(error);
};

const redirect = route => {
  window.location.href = route;
};

export const updateStoreKeys = data => {
  return {
    type: 'UPDATE_STORE_KEYS',
    data,
  };
};

export const viewerAuthenticated = viewer => {
  return {
    type: 'VIEWER_AUTHENTICATED',
    isAuthenticated: true,
    viewer,
  };
};

export const viewerLogout = () => {
  return {
    type: 'VIEWER_LOGOUT',
  };
};

export const viewerDelete = () => {
  return async dispatch => {
    const response = await HTTP.deleteViewer();

    if (response.status !== 200) {
      return exception('error');
    }

    return dispatch(requestLogout());
  };
};

export const requestSaveComment = options => {
  return async dispatch => {
    const response = await HTTP.saveComment(options);

    if (response.status !== 200) {
      return exception('error');
    }

    window.location.reload();
  };
};

export const requestSaveReply = options => {
  return async dispatch => {
    const response = await HTTP.saveReply(options);

    if (response.status !== 200) {
      return exception('error');
    }

    window.location.reload();
  };
};

export const requestUpdateComment = options => {
  return async dispatch => {
    const response = await HTTP.updateComment(options);

    if (response.status !== 200) {
      return exception('error');
    }

    window.location.reload();
  };
};

export const requestDeleteComment = options => {
  return async dispatch => {
    const response = await HTTP.deleteComment(options);

    if (response.status !== 200) {
      return exception('error');
    }

    window.location.reload();
  };
};

export const requestDeletePost = id => {
  return async dispatch => {
    const response = await HTTP.deletePost(id);

    if (response.status !== 200) {
      return exception('error');
    }

    window.location.reload();
  };
};

export const requestUpdatePost = data => {
  return async dispatch => {
    const response = await HTTP.updatePost(data);

    if (response.status !== 200) {
      return exception('error');
    }

    window.location.reload();
  };
};

export const requestSavePost = data => {
  return async dispatch => {
    const response = await HTTP.savePost(data);

    if (response.status === 200) {
      return redirect('/');
    }

    if (response.status === 403) {
      return dispatch(requestLogout());
    }

    return exception('error');
  };
};

export const requestLogout = () => {
  return async dispatch => {
    const response = await HTTP.logout();

    if (response.status === 200) {
      return redirect('/');
    }

    if (response.status === 403) {
      return redirect('/');
    }

    return exception('error');
  };
};

export const requestLogin = data => {
  return async dispatch => {
    const response = await HTTP.login(data);

    if (response.status !== 200) {
      return exception('error');
    }

    return redirect('/');
  };
};

export const requestSignup = data => {
  return async dispatch => {
    const response = await HTTP.signup(data);

    if (response.status !== 200) {
      return exception('error');
    }

    return redirect('/');
  };
};
