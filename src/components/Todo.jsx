import 'moment/locale/ko'
import moment from 'moment';
import React from 'react';
import Modal from './Modal.jsx'
import TodoItem from './TodoItem.jsx';
import '../scss/Todo.scss'

class Todo extends React.Component {

    state = {
      date: moment().format('LL'),
      day: moment().format('dddd'),
      modalOpen: false
    }

    openModal = () => {
      this.setState({ modalOpen: True})
    }

  render() {

    return (
      <div id='todo'>
        <h1 id='todayDate'>{this.state.date}</h1>
        <h3 id='today'>{this.state.day}</h3>
        <TodoItem/>
        {/* <Modal header="Add Todo List"></Modal> */}
        <div id='wrapBtn'><button id='addTodoBtn' onClick={this.openModal}>+</button></div>
      </div>
    )
  }
}

export default Todo;