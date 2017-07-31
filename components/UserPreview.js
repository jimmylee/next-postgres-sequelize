import React from 'react';
import { connect } from 'react-redux';
import * as Strings from '../common/strings';
import * as Actions from '../common/actions';

class UserPreview extends React.Component {
  _handleDelete = () => {
    this.props.dispatch(Actions.viewerDelete());
  };

  render() {
    const isViewer =
      this.props.viewer && this.props.id === this.props.viewer.id;

    return (
      <div className="container">
        <style jsx>{`
          .container {
            box-sizing: border-box;
            margin: 0 0 16px 0;
            padding: 4px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 12px;
            padding: 16px;
            border: 1px solid #ECECEC;
          }

          .item {
            margin-right: 16px;
          }

          .item--bold {
            font-weight: 600;
          }

          .action {
            color: #0000FF;
            cursor: pointer;
            text-decoration: underline;
            transition: color 200ms ease;

            &:hover {
              color: #1111AF;
            }
          }

          .left {
            min-width: 25%;
            width: 100%;
          }

          .right {
            flex-shrink: 0;
          }
        `}</style>
        <div className="left">
          <span className="item item--bold">
            👤 {this.props.username}
          </span>
          <span className="item">
            Joined on {Strings.toDate(this.props.createdAt)}
          </span>
        </div>
        {isViewer
          ? <div className="right">
              <span className="action" onClick={this._handleDelete}>
                Delete your account
              </span>
            </div>
          : undefined}
      </div>
    );
  }
}

export default connect(state => {
  return { viewer: state.viewer };
})(UserPreview);
