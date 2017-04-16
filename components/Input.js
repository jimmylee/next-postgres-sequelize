import React from 'react';
import PropTypes from 'prop-types';
import Label from '../components/Label';

export default class Input extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    onKeyUp: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
  };

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
      <div className="container">
        <style jsx>{`
          .container {
            width: 100%;
            position: relative;
          }

          .input {
            font-size: 16px;
            font-weight: 600;
            padding: 44px 16px 16px 16px;
            width: 100%;
            box-sizing: border-box;
            z-index: 1;
            color: #000000;
            border: 2px solid #000000;
            box-shadow: 4px 4px 0 #000000;
          }

          .input:focus {
            border: 2px solid blue;
            box-shadow: 4px 4px 0 blue;
          }
        `}</style>
        <Label>{this.props.label}</Label>
        <input
          ref="input"
          autoComplete="off"
          className="input"
          onChange={this.props.onChange}
          onKeyUp={this._handleKeyUp}
          placeholder={this.props.placeholder}
          value={this.props.value}
          name={this.props.name}
          type={this.props.type}
        />
      </div>
    );
  }
}
