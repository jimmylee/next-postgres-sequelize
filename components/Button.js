import { css } from 'react-emotion';

const buttonStyle = css``;

export default props => (
  <button {...props} className={buttonStyle}>
    {props.children}
  </button>
);
