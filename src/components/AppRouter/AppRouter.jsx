// Реализуйте роутер приложения.
// Здесь должны быть обьявлены роуты,
// которые будут доступны авторизованному пользователю.
// - Home
// - InboxList
// - InboxMail
// - OutboxList
// - OutboxMail

// Так же в этом файле обьявите лейаут,
// используйте стили из AppRouter.module.css
import React, { PureComponent } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Home from '../Home';
import InboxList from '../InboxList';
import InboxMail from '../InboxMail';
import OutboxList from '../OutboxList';
import OutboxMail from '../OutboxMail';
import style from './AppRouter.module.css';

class AppRouter extends PureComponent {
  renderTitle = (title) => () => title;

    render() {
    return (
      <div className={style.wrapper}>
         <div className={style.container}>
           <nav className={style.nav}>
             <ul className={style.navList}>
               <li className={style.navElement}>
                <NavLink to='/app' className={style.link} exact>
                  Home
                </NavLink>
              </li>
              <li className={style.navElement}>
                <NavLink to='/app/inbox' className={style.link} exact>
                  Inbox
                </NavLink>
              </li>
              <li className={style.navElement}>
                <NavLink to='/app/outbox' className={style.link} exact>
                  Outbox
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className={style.content}>
            <h3 className={style.title}>
            <Switch>
              <Route path='/app' component={this.renderTitle('Home')} exact />
              <Route path="/app/inbox" component={this.renderTitle('Inbox')} />
              <Route path="/app/outbox" component={this.renderTitle('Outbox')} />
            </Switch>
            </h3>
           <Switch>
            <Route path='/app' component={Home} exact />
            <Route path="/app/inbox" component={InboxList} exact />
            <Route path="/app/inbox/:id" component={InboxMail} />
            <Route path="/app/outbox" component={OutboxList} exact />
            <Route path="/app/outbox/:id" component={OutboxMail} />
            <Redirect to="/app" />
           </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default AppRouter;
