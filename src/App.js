import React from "react";
import TodoInput from "./components/TodoInput.jsx";
import './scss/app.scss'

export default class App extends React.Component {
  render() {
    return (
      <div id="todo-wrap">
        <h1 className="title">Todo-List</h1>
        <div id="todo">
          <TodoInput />
        </div>
      </div>
    );
  }
}
