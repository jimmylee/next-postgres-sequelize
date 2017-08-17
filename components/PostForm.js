import React from 'react';
import Textarea from '../components/Textarea';
import Button from '../components/Button';
import { connect } from 'react-redux';

class PostForm extends React.Component {
  render() {
    return (
      <div style={this.props.style}>
        <Textarea
          value={this.props.title}
          placeholder="Optional title"
          fontWeight={600}
          lineHeight="2.8rem"
          fontSize="2.618rem"
          onChange={this.props.onTitleChange}
        />
        <Textarea
          onChange={this.props.onContentChange}
          placeholder="Start writing..."
          value={this.props.value}
        />
      </div>
    );
  }
}

export default connect(state => state)(PostForm);
