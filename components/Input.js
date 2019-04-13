import * as React from 'react';

import styled from '@emotion/styled';

import Label from '../components/Label';

const FormBase = styled.div`
  position: relative;
`;

const FormInput = styled.input`
  width: 100%;
  outline: 0;
  border: 0;
  background: #666666;
  color: #ffffff;
  padding: 48px 8px 16px 8px;
  margin-bottom: 8px;
  font-size: 16px;

  :focus {
    background: blue;
  }
`;

export default class Input extends React.Component {
  static defaultProps = {
    onChange: () => {},
    onSubmit: () => {},
    onKeyUp: () => {},
  };

  _handleKeyUp = e => {
    if (e.which === 13) {
      this.props.onSubmit(e);
      return;
    }

    this.props.onKeyUp(e);
  };

  componentDidMount = () => {
    if (this.props.autoFocus) {
      this.refs.input.focus();
    }
  };

  render() {
    return (
      <FormBase>
        {this.props.label ? <Label>{this.props.label}</Label> : undefined}
        <FormInput
          ref="input"
          autoComplete="off"
          onChange={this.props.onChange}
          onKeyUp={this._handleKeyUp}
          placeholder={this.props.placeholder}
          value={this.props.value}
          name={this.props.name}
          type={this.props.type}
        />
      </FormBase>
    );
  }
}
