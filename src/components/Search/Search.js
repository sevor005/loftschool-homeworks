/* eslint-disable react/destructuring-assignment */
// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.
import React, {Component} from 'react';
import {searchRequest} from '../../Actions/search';
import {connect} from 'react-redux';
import ShowPreview from '../ShowPreview'
import styles from './Search.module.css';

class Search extends Component {
  state = {
    value: ''
  }

  handleClick = event => {
    const {value} = this.state;
    const {searchRequest} = this.props;
    searchRequest(value)
    this.setState({value: ''})
  }

  handleChange = event => {
    this.setState({value: event.target.value})
  }

  render() {
    const {value} = this.state;
    const {entities} = this.props.search;
    return (
      <div className={styles.app}>
        <div className={styles.previewList}>
          <input
          type='text'
          className={styles.input}
          placeholder='Название сериала'
          value={value}
          onChange={this.handleChange}
         />
         <div className={styles.buttonWrapper}>
          <button onClick={this.handleClick} className={styles.button}>Найти</button>
         </div>
        </div>
         <div className={styles.searchPanel}>

          {entities.map(show => {
            return <ShowPreview show={show} />
          })}

         </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  searchRequest
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, mapDispatchToProps)(Search);
