/* eslint-disable react/destructuring-assignment */
// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.

import React, {Component} from 'react';
import styles from './ShowPreview.module.css';
import {Link} from 'react-router-dom';

class ShowPreview extends Component {

  render() {
    const {image, name, id, summary} = this.props.show;
    return (
      <div className={styles.container}>
        <div>
          <Link to={`/show/${id}`} className={styles.containerTop}>
            {name}
          </Link>
          {image !== null && <img src={image.medium} alt='name' />}
        </div>
        <div dangerouslySetInnerHTML={{__html: summary}}></div>
      </div>
    )
  }
}

export default ShowPreview;
