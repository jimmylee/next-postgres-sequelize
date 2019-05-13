import * as React from 'react';

import styled from '@emotion/styled';

const FormTextarea = styled.textarea`
  width: 100%;
  resize: none;
  outline: 0;
  border: 1px solid #ececec;
  padding: 16px 8px 16px 8px;
  font-size: 16px;

  &:focus {
    outline: 0;
    border: 1px solid blue;
  }
`;

export default class Textarea extends React.Component {
  render() {
    return (
      <FormTextarea
        autoComplete="off"
        style={this.props.style}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
        value={this.props.value}
        name={this.props.name}
      />
    );
  }
}
