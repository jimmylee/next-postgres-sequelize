import * as React from 'react';

import Textarea from '../components/Textarea';

export default class PostForm extends React.Component {
  render() {
    return (
      <div style={this.props.style}>
        <Textarea
          onChange={this.props.onTitleChange}
          value={this.props.title}
          placeholder="Optional title"
          style={{ marginBottom: 24 }}
        />
        <Textarea
          onChange={this.props.onContentChange}
          placeholder="Start writing..."
          style={{ height: 640, marginBottom: 24 }}
        />
      </div>
    );
  }
}
