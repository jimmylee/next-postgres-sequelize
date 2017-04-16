import React from 'react';
import Textarea from './Textarea';
import Button from './Button';
import Spacer from './Spacer';
import { connect } from 'react-redux';

class PostForm extends React.Component {
  render() {
    return (
      <div>
        <Textarea
          value={this.props.title}
          placeholder="Optional title"
          fontWeight={600}
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
