// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.
import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import style from './MailList.module.css';

class MailList extends PureComponent {
  render() {
    const {mails} = this.props;
    return (
      <div className={style.container}>
        {mails.map((mail) => {
          return <Link to={mail.link} className={style.link}>
            {mail.title}
          </Link>
        })}
      </div>
    )
  }
}

export default MailList;
