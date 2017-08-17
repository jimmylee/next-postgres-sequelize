import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import * as Actions from '../common/actions';
import { connect } from 'react-redux';

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
      <div className="form">
        <style jsx>{`
          .spacer {
            height: 16px;
            margin: 0;
            width: 100%;
            display: block;
            border: 0;
          }
          .large-spacer {
            height: 24px;
            margin: 0;
            width: 100%;
            display: block;
            border: 0;
          }
        `}</style>
        <Input
          label="Username"
          value={this.state.username}
          name="username"
          onChange={this._handleChange}
        />
        <hr className="spacer" />
        <Input
          label="Password"
          value={this.state.password}
          name="password"
          type="password"
          onChange={this._handleChange}
        />
        <hr className="spacer" />
        <Input
          label="Verify your password"
          value={this.state.verify}
          name="verify"
          type="password"
          onChange={this._handleChange}
          onSubmit={this._handleSubmit}
        />
        <hr className="large-spacer" />
        <Button onClick={this._handleSubmit}>
          Sign up
        </Button>
      </div>
    );
  }
}

export default connect(state => state)(AuthSignupForm);
