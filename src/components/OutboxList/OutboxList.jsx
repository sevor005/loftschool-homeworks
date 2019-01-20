// Реализуйте компонент OutboxList
// Он должен показывать список писем на отправку.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.

import React, { PureComponent } from 'react';
import {withData} from '../../context/Data';
import MailList from '../MailList';

class OutboxList extends PureComponent {
  render() {
    return(
      <MailList mails={this.props.data.outbox.map(({id, body}) => ({title: body.substring(0, 53),  link: `/app/outbox/${id}`}))} />
    )
  }
}

export default withData(OutboxList);
