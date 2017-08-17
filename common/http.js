import 'isomorphic-fetch';

const requestHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const ENV = process.env.NODE_ENV || 'development';
const SERVER_PATH = ENV === 'development'
  ? 'http://localhost:8000'
  : 'https://guarded-coast-67601.herokuapp.com';

export const getAllComments = () => {
  const options = {
    method: 'GET',
    headers: requestHeaders,
    credentials: 'include',
  };

  return fetch(`${SERVER_PATH}/api/comments`, options);
};

export const saveComment = ({ postId, content }) => {
  const options = {
    method: 'POST',
    headers: requestHeaders,
    credentials: 'include',
    body: JSON.stringify({ postId, content }),
  };

  return fetch(`${SERVER_PATH}/api/comments`, options);
};

export const saveReply = ({ postId, commentId, content }) => {
  const options = {
    method: 'POST',
    headers: requestHeaders,
    credentials: 'include',
    body: JSON.stringify({ postId, commentId, content }),
  };

  return fetch(`${SERVER_PATH}/api/comments`, options);
};

export const updateComment = ({ postId, commentId, content }) => {
  const options = {
    method: 'PUT',
    headers: requestHeaders,
    credentials: 'include',
    body: JSON.stringify({ commentId, content }),
  };

  return fetch(
    `${SERVER_PATH}/api/posts/${postId}/comments/${commentId}`,
    options
  );
};

export const deleteComment = ({ postId, commentId }) => {
  const options = {
    method: 'DELETE',
    headers: requestHeaders,
    credentials: 'include',
  };

  return fetch(
    `${SERVER_PATH}/api/posts/${postId}/comments/${commentId}`,
    options
  );
};

export const getAllPosts = () => {
  const options = {
    method: 'GET',
    headers: requestHeaders,
    credentials: 'include',
  };

  return fetch(`${SERVER_PATH}/api/posts`, options);
};

export const getPostById = id => {
  const options = {
    method: 'GET',
    headers: requestHeaders,
    credentials: 'include',
  };

  return fetch(`${SERVER_PATH}/api/posts/${id}`, options);
};

export const deleteViewer = () => {
  const options = {
    method: 'DELETE',
    headers: requestHeaders,
    credentials: 'include',
  };

  return fetch(`${SERVER_PATH}/api/viewer/delete`, options);
};

export const deletePost = id => {
  const options = {
    method: 'DELETE',
    headers: requestHeaders,
    credentials: 'include',
  };

  return fetch(`${SERVER_PATH}/api/posts/${id}`, options);
};

export const updatePost = ({ content, title, postId }) => {
  const options = {
    method: 'PUT',
    credentials: 'include',
    headers: requestHeaders,
    body: JSON.stringify({ content, title }),
  };

  return fetch(`${SERVER_PATH}/api/posts/${postId}`, options);
};

export const savePost = ({ content, title }) => {
  const options = {
    method: 'POST',
    credentials: 'include',
    headers: requestHeaders,
    body: JSON.stringify({ content, title }),
  };

  return fetch(`${SERVER_PATH}/api/posts`, options);
};

export const getAllUsers = () => {
  const options = {
    method: 'GET',
    headers: requestHeaders,
    credentials: 'include',
  };

  return fetch(`${SERVER_PATH}/api/users`, options);
};

export const login = ({ username, password }) => {
  const options = {
    method: 'POST',
    headers: requestHeaders,
    credentials: 'include',
    body: JSON.stringify({ username: username.toLowerCase(), password }),
  };

  return fetch(`${SERVER_PATH}/api/login`, options);
};

export const logout = () => {
  const options = {
    method: 'POST',
    credentials: 'include',
    headers: requestHeaders,
  };

  return fetch(`${SERVER_PATH}/api/logout`, options);
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

  return fetch(`${SERVER_PATH}/api/signup`, options);
};
