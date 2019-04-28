import * as React from 'react';
import * as Strings from '../common/strings';

import BorderedItem from '../components/BorderedItem';

export default class PostLockup extends React.Component {
  render() {
    return (
      <aside style={{ marginTop: 8 }}>
        <BorderedItem style={{ marginRight: 16 }}>
          {this.props.commentLength}{' '}
          {Strings.pluralize('comment', this.props.commentLength)}
        </BorderedItem>
        <BorderedItem>
          <strong>{Strings.toDate(this.props.createdAt)}</strong> by{' '}
          <strong>{this.props.username}</strong>
        </BorderedItem>
      </aside>
    );
  }
}
