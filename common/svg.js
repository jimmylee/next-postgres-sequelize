import React from 'react';

export const EditIcon = props => (
  <svg
    onClick={props.onClick}
    style={{
      ...props.style,
      marginBottom: 1,
      cursor: props.interactionStyle ? 'pointer' : undefined,
    }}
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34" />
    <polygon points="18 2 22 6 12 16 8 16 8 12 18 2" />
  </svg>
);

export const DeleteIcon = props => (
  <svg
    onClick={props.onClick}
    style={{
      ...props.style,
      cursor: props.interactionStyle ? 'pointer' : undefined,
    }}
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="9" y1="9" x2="15" y2="15" />
    <line x1="15" y1="9" x2="9" y2="15" />
  </svg>
);

export const CommentIcon = props => (
  <svg
    onClick={props.onClick}
    style={{
      ...props.style,
      cursor: props.interactionStyle ? 'pointer' : undefined,
    }}
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
