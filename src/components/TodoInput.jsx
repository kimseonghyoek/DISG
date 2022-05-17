import React from 'react';
import '../scss/TodoInput.scss'

class TodoInput extends React.Component {
  render() {
    const addTodoList = () => {
      const input = document.getElementById('todoInput')
    }
    return (
      <div>
        <input 
          placeholder='Edit your work!😁'
          id='todoInput'
        ></input>
        <button onClick={addTodoList}>➕</button>
      </div>
    )
  }
}

export default TodoInput;