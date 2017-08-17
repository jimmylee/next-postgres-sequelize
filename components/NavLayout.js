import React from 'react';
import Link from '../components/Link';
import * as Actions from '../common/actions';
import { connect } from 'react-redux';

export default class NavLayout extends React.Component {
  render() {
    return (
      <nav className="nav-layout">
        <style jsx>{`
          .nav-layout :global(.link) {
            cursor: pointer;
            line-height: 1;
            font-size: 12px;
            font-weight: 600;
            margin-right: 16px;
            text-decoration: underline;
            background-color: transparent;
            color: #0000FF;
            transition: 200ms all linear;
            transition-property: transform, color;
          }

          .nav-layout :global(.link:visited) {
            color: #0000FF;
          }

          .nav-layout :global(.link:hover) {
            color: #1111AF;
          }

          .nav-layout {
            height: 64px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            box-sizing: border-box;
            white-space: nowrap;
            overflow: hidden;
          }

          .nav-layout-children {
            margin: 0 auto 0 auto;
            width: 100%;
            max-width: 588px;
            padding: 0 24px 0 24px;
            box-sizing: border-box;
          }
        `}</style>
        <div className="nav-layout-children">
          {this.props.children}
        </div>
      </nav>
    );
  }
}
