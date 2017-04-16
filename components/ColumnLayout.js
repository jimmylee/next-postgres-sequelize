import React from 'react';

export default class ColumnLayout extends React.Component {
  render() {
    return (
      <div className="column-layout">
        <style jsx>{`
          .column-layout {
            width: 100%;
            max-width: 588px;
            padding: 0 24px 0 24px;
            box-sizing: border-box;
            margin: 64px auto 0 auto;
          }

          .bottom {
            height: 128px;
            width: 100%;
          }
        `}</style>
        {this.props.children}
        <div className="bottom" />
      </div>
    );
  }
}
