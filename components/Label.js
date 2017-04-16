import React from 'react';
import PropTypes from 'prop-types';

export default class Label extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <label className="label">
        <style jsx>{`
          .label {
            font-size: 12px;
            padding: 0 0 8px 0;
            display: block;
            letter-spacing: 1px;
            background-color: transparent;
            text-transform: uppercase;
            font-weight: 500;
            z-index: 1;
            color: #000000;
            position: absolute;
            top: 14px;
            left: 16px;
          }
        `}</style>
        {this.props.children}
      </label>
    );
  }
}
