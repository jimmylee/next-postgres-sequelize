import 'isomorphic-fetch';

const requestHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const getAllComments = () => {
  const options = {
    method: 'GET',
    headers: requestHeaders,
    credentials: 'include',
  };

  return fetch(`/api/comments`, options);
};

export const saveComment = ({ postId, content }) => {
  const options = {
    method: 'POST',
    headers: requestHeaders,
    credentials: 'include',
    body: JSON.stringify({ postId, content }),
  };

  return fetch(`/api/comments`, options);
};

export const saveReply = ({ postId, commentId, content }) => {
  const options = {
    method: 'POST',
    headers: requestHeaders,
    credentials: 'include',
    body: JSON.stringify({ postId, commentId, content }),
  };

  return fetch(`/api/comments`, options);
};

export const updateComment = ({ postId, commentId, content }) => {
  const options = {
    method: 'PUT',
    headers: requestHeaders,
    credentials: 'include',
    body: JSON.stringify({ commentId, content }),
  };

  return fetch(`/api/posts/${postId}/comments/${commentId}`, options);
};

export const deleteComment = ({ postId, commentId }) => {
  const options = {
    method: 'DELETE',
    headers: requestHeaders,
    credentials: 'include',
  };

  return fetch(`/api/posts/${postId}/comments/${commentId}`, options);
};

export const getAllPosts = () => {
  const options = {
    method: 'GET',
    headers: requestHeaders,
    credentials: 'include',
  };

  return fetch(`/api/posts`, options);
};

export const getPostById = id => {
  const options = {
    method: 'GET',
    headers: requestHeaders,
    credentials: 'include',
  };

  return fetch(`/api/posts/${id}`, options);
};

export const deleteViewer = () => {
  const options = {
    method: 'DELETE',
    headers: requestHeaders,
    credentials: 'include',
  };

  return fetch(`/api/viewer/delete`, options);
};

export const deletePost = id => {
  const options = {
    method: 'DELETE',
    headers: requestHeaders,
    credentials: 'include',
  };

  return fetch(`/api/posts/${id}`, options);
};

export const updatePost = ({ content, title, postId }) => {
  const options = {
    method: 'PUT',
    credentials: 'include',
    headers: requestHeaders,
    body: JSON.stringify({ content, title }),
  };

  return fetch(`/api/posts/${postId}`, options);
};

export const savePost = ({ content, title }) => {
  const options = {
    method: 'POST',
    credentials: 'include',
    headers: requestHeaders,
    body: JSON.stringify({ content, title }),
  };

  return fetch(`/api/posts`, options);
};

export const getAllUsers = () => {
  const options = {
    method: 'GET',
    headers: requestHeaders,
    credentials: 'include',
  };

  return fetch(`/api/users`, options);
};

export const login = ({ username, password }) => {
  const options = {
    method: 'POST',
    headers: requestHeaders,
    credentials: 'include',
    body: JSON.stringify({ username: username.toLowerCase(), password }),
  };

  return fetch(`/api/login`, options);
};

export const logout = () => {
  const options = {
    method: 'POST',
    credentials: 'include',
    headers: requestHeaders,
  };

  return fetch(`/api/logout`, options);
};

export const signup = ({ username, password, verify }) => {
  const options = {
    method: 'POST',
    headers: requestHeaders,
    credentials: 'include',
    body: JSON.stringify({
      username: username.toLowerCase(),
      password,
      verify,
    }),
  };

  return fetch(`/api/signup`, options);
};
