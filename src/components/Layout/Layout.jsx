import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {

  renderHeader(HeaderChild) {
    return (
      <header className="header">
        <SectionTitle className="header__title">Header</SectionTitle>
        <div className="header__content">
          <HeaderChild />
        </div>
      </header>
    )
  }

  renderFooter(FooterChild) {
    return (
      <footer className="footer">
        <SectionTitle className="footer__title">Footer</SectionTitle>
        <div className="footer__content">
          <FooterChild />
        </div>
      </footer>
    )
  }

  render() {
    const { header, footer, children } = this.props
    return (
      <React.Fragment>
        {this.renderHeader(header)}
        <main className='main main-with-header main-with-footer'>
        <SectionTitle>
          Main
        </SectionTitle>
        {children}
        </main>

        {this.renderFooter(footer)}
      </React.Fragment>
    )
  }
}

export default Layout;
