import React from 'react';
import ColumnLayout from '../components/ColumnLayout';
import Document from '../components/Document';
import PostForm from '../components/PostForm';
import Button from '../components/Button';
import NavPublic from '../components/NavPublic';
import Nav from '../components/Nav';
import withData from '../higher-order/withData';
import * as Actions from '../common/actions';

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
    const navigation = !this.props.isAuthenticated ? <NavPublic /> : <Nav />;

    return (
      <Document>
        {navigation}
        <ColumnLayout>
          <PostForm
            style={{ margin: '0 0 48px 0' }}
            title={this.state.title}
            content={this.state.content}
            onTitleChange={this._handleChangeTitle}
            onContentChange={this._handleChangeContent}
          />
          <Button onClick={this._handleSave}>
            Publish
          </Button>
        </ColumnLayout>
      </Document>
    );
  }
}

export default withData({}, state => state)(Write);
