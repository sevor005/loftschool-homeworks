import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (localStorageKey, initValue) => (WrapedComponent) => {
  class WrapperComponent extends Component {
    loadData = () => {
      return load(localStorageKey) || initValue
    }
    saveData = (data) => {
      save(localStorageKey, data)
      this.forceUpdate()
    }
    render() {
      const {forwardRef, ...rest} = this.props
      return <WrapedComponent saveData={this.saveData} savedData={this.loadData()} {...rest} ref={forwardRef}/>
    }
  }
  return React.forwardRef((props, ref) => <WrapperComponent {...props} forwardRef={ref} />)
};

export default withLocalstorage;
