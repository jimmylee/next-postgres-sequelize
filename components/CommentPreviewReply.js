import React from 'react';
import CommentPreviewHeader from '../components/CommentPreviewHeader';
import * as Strings from '../common/strings';

export default class CommentPreviewReply extends React.Component {
  render() {
    return (
      <div className="container" style={this.props.style}>
        <style jsx>{`
          .container {
            font-size: 14px;
            box-sizing: border-box;
            white-space: pre-wrap;
            overflow-wrap: break-word;
          }

          .content {
            padding: 16px;
            border-right: 1px solid #515559;
            border-left: 1px solid #515559;
            border-bottom: 1px solid #515559;
          }

          .bold {
            font-weight: 600;
          }
        `}</style>
        <CommentPreviewHeader
          isEditing={this.props.isEditing}
          isEditable={this.props.isEditable}
          onDelete={this.props.onDelete}
          viewer={this.props.viewer}
          style={{ background: '#515559' }}>
          <span className="bold">
            {this.props.username}{' '}
          </span>commented on
          <span className="bold">
            {' '}{Strings.toDate(this.props.createdAt)}
          </span>
        </CommentPreviewHeader>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
