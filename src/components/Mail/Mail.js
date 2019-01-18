// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.
import React, {PureComponent} from 'react';
import style from './Mail.module.css';

class Mail extends PureComponent {
  render() {
    const {from, body, to} = this.props;
    return(
      <div className={style.container}>
        {
          from ?
          <p>From:{from}</p> :
          <p>To:{to}</p>
        }
        <p>{body}</p>
      </div>
    )
  }
}

export default Mail;
