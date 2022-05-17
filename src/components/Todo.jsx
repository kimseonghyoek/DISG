import 'moment/locale/ko'
import moment from 'moment';
import React from 'react';
import TodoInput from './TodoInput.jsx';
import '../scss/Todo.scss'

class Todo extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {date: moment().format('LL')}
  }

  render() {
    return (
      <div id='todo'>
        <h2 id='todayDate'>{this.state.date}</h2>
        <TodoInput/>
      </div>
    )
  }
}

export default Todo;