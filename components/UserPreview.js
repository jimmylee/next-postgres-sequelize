import React from 'react';
import { connect } from 'react-redux';
import ButtonText from '../components/ButtonText';
import BoxHeaderLayout from '../components/BoxHeaderLayout';
import * as Strings from '../common/strings';
import * as Actions from '../common/actions';

class UserPreview extends React.Component {
  _handleDelete = () => {
    this.props.dispatch(Actions.viewerDelete());
  };

  render() {
    const isViewer =
      this.props.viewer && this.props.user.id === this.props.viewer.id;

    return (
      <div className="container" style={this.props.style}>
        <style jsx>{`
          .container {
            font-size: 14px;
            box-sizing: border-box;
            white-space: pre-wrap;
            overflow-wrap: break-word;
          }

          .bold {
            font-weight: 600;
          }

          .content {
            padding: 16px;
            border-right: 1px solid #2e2f30;
            border-left: 1px solid #2e2f30;
            border-bottom: 1px solid #2e2f30;
          }

          .actions {
            margin: 24px 0 0 0;
            font-size: 12px;
          }
        `}</style>
        <BoxHeaderLayout style={{ background: '#2e2f30' }}>
          <span className="bold">
            {' '}{this.props.user.username}
          </span>
        </BoxHeaderLayout>
        <div className="content">
          Joined on {Strings.toDate(this.props.user.createdAt)}

          {isViewer
            ? <div className="actions">
                <ButtonText onClick={this._handleDelete}>
                  Delete your account
                </ButtonText>
              </div>
            : undefined}
        </div>
      </div>
    );
  }
}

export default connect(state => {
  return { viewer: state.viewer };
})(UserPreview);
