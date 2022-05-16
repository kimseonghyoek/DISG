import React from 'react';
import '../scss/TodoInput.scss'

class TodoInput extends React.Component {
  render() {
    return (
      <div>
        <input 
          placeholder='Edit your work!😁'
        ></input>
        <button>➕</button>
      </div>
    )
  }
}

export default TodoInput;