import * as React from 'react';

import CommentList from '../components/CommentList';
import Document from '../components/Document';
import ColumnLayout from '../components/ColumnLayout';
import NavAuthenticated from '../components/NavAuthenticated';
import NavPublic from '../components/NavPublic';
import withData from '../higher-order/withData';

class Comments extends React.Component {
  render() {
    let navigation = !this.props.isAuthenticated ? (
      <NavPublic />
    ) : (
      <NavAuthenticated />
    );

    return (
      <Document>
        {navigation}
        <ColumnLayout>
          <CommentList
            showResponse
            viewer={this.props.viewer}
            comments={this.props.comments}
            dispatch={this.props.dispatch}
          />
        </ColumnLayout>
      </Document>
    );
  }
}

export default withData({}, state => state)(Comments);
