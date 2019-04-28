import * as React from 'react';
import * as Actions from '../common/actions';

import { connect } from 'react-redux';

import Input from '../components/Input';
import Button from '../components/Button';

class AuthLoginForm extends React.Component {
  state = {
    username: '',
    password: '',
  };

  _handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  _handleSubmit = e => {
    this.props.dispatch(Actions.requestLogin(this.state));
  };

  render() {
    return (
      <div style={this.props.style}>
        <Input
          label="Username"
          autoFocus
          value={this.state.username}
          name="username"
          onChange={this._handleChange}
        />
        <Input
          label="Password"
          value={this.state.password}
          type="password"
          name="password"
          onChange={this._handleChange}
          onSubmit={this._handleSubmit}
        />
        <Button onClick={this._handleSubmit} style={{ marginTop: 16 }}>
          Log in
        </Button>
      </div>
    );
  }
}

export default connect(state => state)(AuthLoginForm);
