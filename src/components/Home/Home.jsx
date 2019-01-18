// Реализуйте компонент Home
// Он должен показывать приветствие.
// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.
import React from 'react';
import style from './Home.module.css';

const Home = () => {
  return(
    <div className={style.container}>
      <p>Приветствуем вас в почтовом клиенте!</p>
    </div>
  )
}
 export default Home;
