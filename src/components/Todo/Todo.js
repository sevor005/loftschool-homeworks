import React, { PureComponent } from 'react';
import Card from '../Card';
import './Todo.css';
import withLocalstorage from '../../HOCs/withLocalstorage';

class Todo extends PureComponent {
  state = {
    inputValue: ''
  };

  getId() {
    const { savedData } = this.props;
    const biggest = savedData.reduce((acc, el) => Math.max(acc, el.id), 0);
    return biggest + 1;
  }

  handleChange = event => {
    this.setState({ inputValue: event.target.value })
  };

  createNewRecordByEnter = event => {
    if(event.key === 'Enter') this.createNewRecord()
  };

  toggleRecordComplete = event => {
    const {savedData, saveData} = this.props
    const id = parseInt(event.target.dataset.todoId, 10)
    const load = savedData.map((item) => item.id === id ? { ...item, isComplete: !item.isComplete } : item)

    saveData(load)
  };

  createNewRecord = () => {
    const id = this.getId()
    const {inputValue} = this.state
    const {savedData, saveData} = this.props
    this.setState({inputValue: ''})

    if(inputValue !== '') {
      return saveData([{id, isComplete: false, text: inputValue}, ...savedData])
    }
  };

  render() {
    const {savedData} = this.props
    return (
      <div className='todo t-todo-list'>
        <Card title='Список дел'>
        {this.renderEmptyRecord()}
          {savedData.map(this.renderRecord)}
        </Card>
      </div>
    );
  }

  renderEmptyRecord() {
    return <div className='todo-item todo-item-new'>
      <input
        className='todo-input t-input'
        value={this.state.inputValue}
        type='text'
        placeholder='Введите задачу'
        onChange={this.handleChange}
        onKeyPress={this.createNewRecordByEnter}
      />
      <span onClick={this.createNewRecord} className='plus t-plus'>+</span>
    </div>;
  }

  renderRecord = record => {
    return (<div className='todo-item t-todo' key={record.id}>
      <p className='todo-item__text'>{record.text}</p>
      <span
         onClick={this.toggleRecordComplete}
         data-todo-id={record.id}
         className='todo-item__flag t-todo-complete-flag'
      >
        {record.isComplete ? '[X]' : '[ ]'}
      </span>
    </div>)
  };
}

export default withLocalstorage('todo-app', [])(Todo);
