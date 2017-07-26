import * as React from 'react';

import PropTypes from 'prop-types';
import Label from '../components/Label';

import { css } from 'react-emotion';

const textareaStyles = css`
  width: 100%;
  resize: none;
  outline: 0;
  border: 1px solid #ececec;
  padding: 16px 8px 16px 8px;

  &:focus {
    outline: 0;
    border: 1px solid blue;
  }
`;

export default class Textarea extends React.Component {
  static propTypes = {
    autoFocus: PropTypes.bool,
    onChange: PropTypes.func,
    name: PropTypes.string,
    value: PropTypes.string,
    fontSize: PropTypes.string,
    height: PropTypes.number,
    fontWeight: PropTypes.number,
  };

  render() {
    return (
      <textarea
        autoComplete="off"
        style={this.props.style}
        className={textareaStyles}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
        value={this.props.value}
        name={this.props.name}
      />
    );
  }
}
