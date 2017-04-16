import React from 'react';

export default class Spacer extends React.Component {
  render() {
    return (
      <div className="spacer" style={{ height: this.props.height }}>
        <style jsx>{`
          .spacer {
            border: 0;
            width: 100%;
            display: block;
          }
        `}</style>
      </div>
    );
  }
}
