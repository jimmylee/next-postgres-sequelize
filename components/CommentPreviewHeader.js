import * as React from 'react';

import Button from '../components/Button';
import BoxHeaderLayout from '../components/BoxHeaderLayout';

export default class CommentPreviewHeader extends React.Component {
  render() {
    const {
      viewer,
      isEditable,
      isEditing,
      onEdit,
      onCancel,
      onDelete,
    } = this.props;

    const rightElements = [
      viewer && isEditable && !isEditing && onEdit ? (
        <Button
          key="edit"
          onClick={this.props.onEdit}
          style={{ marginRight: 8 }}>
          Edit
        </Button>
      ) : (
        undefined
      ),
      viewer && isEditable && isEditing && onCancel ? (
        <Button
          key="cancel"
          onClick={this.props.onCancel}
          style={{ marginRight: 8 }}>
          Cancel
        </Button>
      ) : (
        undefined
      ),
      viewer && isEditable && !isEditing && this.props.onDelete ? (
        <Button key="delete" onClick={onDelete}>
          Delete
        </Button>
      ) : (
        undefined
      ),
    ];

    return (
      <BoxHeaderLayout right={rightElements} style={this.props.style}>
        {this.props.children}
      </BoxHeaderLayout>
    );
  }
}
