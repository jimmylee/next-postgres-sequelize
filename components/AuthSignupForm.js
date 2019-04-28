import * as React from 'react';
import * as Actions from '../common/actions';

import { connect } from 'react-redux';

import Input from '../components/Input';
import Button from '../components/Button';

class AuthSignupForm extends React.Component {
  state = {
    username: '',
    password: '',
    verify: '',
  };

  _handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  _handleSubmit = e => {
    this.props.dispatch(Actions.requestSignup(this.state));
  };

  render() {
    return (
      <div style={this.props.style}>
        <Input
          label="Username"
          value={this.state.username}
          name="username"
          onChange={this._handleChange}
        />
        <Input
          label="Password"
          value={this.state.password}
          name="password"
          type="password"
          onChange={this._handleChange}
        />
        <Input
          label="Verify your password"
          value={this.state.verify}
          name="verify"
          type="password"
          onChange={this._handleChange}
          onSubmit={this._handleSubmit}
        />
        <Button onClick={this._handleSubmit} style={{ marginTop: 16 }}>
          Sign up
        </Button>
      </div>
    );
  }
}

export default connect(state => state)(AuthSignupForm);
