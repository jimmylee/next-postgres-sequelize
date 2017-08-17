import React from 'react';
import BoxHeaderLayout from '../components/BoxHeaderLayout';
import { EditIcon, DeleteIcon, CommentIcon } from '../common/svg';

export default class CommentPreviewHeader extends React.Component {
  render() {
    const {
      viewer,
      isEditable,
      isEditing,
      style,
      onEdit,
      onCancel,
      onDelete,
    } = this.props;

    const rightElements = [
      viewer && isEditable && !isEditing && onEdit
        ? <EditIcon
            key="edit"
            interactionStyle
            onClick={this.props.onEdit}
            style={{ margin: '0 0 0 16px' }}
          />
        : undefined,
      viewer && isEditable && isEditing && onCancel
        ? <EditIcon
            key="cancel"
            interactionStyle
            onClick={this.props.onCancel}
            style={{ margin: '0 0 0 16px' }}
          />
        : undefined,
      viewer && isEditable && !isEditing && this.props.onDelete
        ? <DeleteIcon
            key="delete"
            interactionStyle
            style={{ margin: '0 0 0 16px' }}
            onClick={onDelete}
          />
        : undefined,
    ];

    return (
      <BoxHeaderLayout right={rightElements} style={this.props.style}>
        {this.props.children}
      </BoxHeaderLayout>
    );
  }
}
