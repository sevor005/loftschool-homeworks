/* eslint-disable react/destructuring-assignment */
// Реализуйте страницу шоу.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле show вашего стейта
// и экшн showRequest.

// В методе componentDidMount вам нужно будет диспатчить showRequest action
import React, {Component} from 'react';
import {showRequest} from '../../Actions/shows';
import {connect} from 'react-redux';
import styles from './ShowPage.module.css';


class ShowPage extends Component {

  componentDidMount() {
    const {showRequest} = this.props;
    showRequest(this.getShowId())
  }

  getShowId = () => {
    const {id} = this.props.match.params;
    return id;
  }

  renderShow = () => {
    if(this.props.shows.entities['_embedded']) {
      const {cast} = this.props.shows.entities._embedded;
      return (
      cast.map(el => {
        return (<div key={el.person.id}>
          <p>{el.person.name}</p>
          {el.person.image && <img src={el.person.image.medium} alt={el.person.name} />}
        </div>)
      })
      )
    }

  }

  render() {
    const { isFetching, entities } = this.props.shows;

    if(isFetching) {
      return (
        <div className={styles.loadingWrap}>
          <p className={styles.loading}>Загрузка...</p>
        </div>
      )
    }

    return (
      <div>
        <p>{entities.name}</p>
        <div className={styles.cast}>
          <img src={entities.image !== undefined ? entities.image.medium: null}
            alt={'name'}
          />
        <div dangerouslySetInnerHTML={{__html:entities.summary}}></div>
        </div>

        {!isFetching ? this.renderShow() : null}

      </div>
    )
  }
}

const mapDispatchToProps = { showRequest }

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);
