import * as React from 'react';
import * as Actions from '../common/actions';

import ColumnLayout from '../components/ColumnLayout';
import Document from '../components/Document';
import PostForm from '../components/PostForm';
import Button from '../components/Button';
import NavPublic from '../components/NavPublic';
import NavAuthenticated from '../components/NavAuthenticated';
import withData from '../higher-order/withData';

class Write extends React.Component {
  state = {
    title: '',
    content: '',
  };

  _handleChangeTitle = e => {
    this.setState({ title: e.target.value });
  };

  _handleChangeContent = e => {
    this.setState({ content: e.target.value });
  };

  _handleSave = () => {
    this.props.dispatch(Actions.requestSavePost(this.state));
  };

  render() {
    const navigation = !this.props.isAuthenticated ? (
      <NavPublic />
    ) : (
      <NavAuthenticated />
    );

    return (
      <Document>
        {navigation}
        <ColumnLayout>
          <PostForm
            title={this.state.title}
            content={this.state.content}
            onTitleChange={this._handleChangeTitle}
            onContentChange={this._handleChangeContent}
          />
          <Button onClick={this._handleSave}>Publish</Button>
        </ColumnLayout>
      </Document>
    );
  }
}

export default withData({}, state => state)(Write);
