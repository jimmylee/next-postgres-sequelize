import React from 'react';

export default class BoxHeaderLayout extends React.Component {
  render() {
    const { style } = this.props;

    return (
      <header className="header" style={style}>
        <style jsx>{`
          .header {
            min-height: 44px;
            background: #24292e;
            color: #FFFFFF;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 16px 0 16px;
          }

          .header-left {
            min-width: 25%;
            width: 100%;
            padding: 8px 0 8px 0;
          }

          .header-right {
            padding-left: 16px;
            flex-shrink: 0;
          }
          `}</style>
        <div className="header-left">
          {this.props.children}
        </div>
        <div className="header-right">
          {this.props.right}
        </div>
      </header>
    );
  }
}
