import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  static propTypes = {
    rightOffset: PropTypes.number,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    rightOffset: 0,
    onClick: () => {},
  };

  render() {
    return (
      <button
        className="button"
        style={{ marginRight: this.props.rightOffset }}
        onClick={this.props.onClick}>
        <style jsx>{`
          .button {
            background: #0000FF;
            color: #FFFFFF;
            padding: 16px;
            cursor: pointer;
            line-height: 1;
            font-size: 16px;
            font-weight: 600;
            transition: 200ms all linear;
            transition-property: transform, color;
          }

          .button:hover {
            background: #1111AF;
          }

          .button:active {
            transform: scale(0.95);
          }
        `}</style>
        {this.props.children}
      </button>
    );
  }
}
