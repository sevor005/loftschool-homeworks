// Реализуйте компонент InboxList
// Он должен показывать список входящих писем.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.

import React, { PureComponent } from 'react';
import {withData} from '../../context/Data';
import MailList from '../MailList';

class InboxList extends PureComponent {
  render() {
    return(
      <MailList mails={this.props.data.inbox.map(({id, body}) => ({title: body.substring(0, 53), link: `/app/inbox/${id}`}))} />
    )
  }
}

export default withData(InboxList);
