import React from 'react';
import PropTypes from 'prop-types';

export default class ButtonText extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    style: PropTypes.object,
  };

  static defaultProps = {
    onClick: () => {},
  };

  render() {
    return (
      <span
        className="item"
        style={this.props.style}
        onClick={this.props.onClick}>
        <style jsx>{`
          .item {
            font-size: 12px;
            font-weight: 600;
            color: #0000FF;
            cursor: pointer;
            text-decoration: underline;
            transition: color 200ms ease;

            &:hover {
              color: #1111AF;
            }
          }
        `}</style>
        {this.props.children}
      </span>
    );
  }
}
