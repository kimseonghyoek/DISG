import React from 'react';

class Counter extends React.Component {
  
  state = {
    number: 0
  }

  render() {
    const { number } = this.state;

    const numberUp = () => {
      this.setState({
        number: number + 1
      })
    }

    const numberDown = () => {
      this.setState({
        number: number - 1
      })
    }

    return (
      <div>
        <h1>{number}</h1>
        <button onClick={numberUp}>+</button>
        <button onClick={numberDown}>-</button>
      </div>
    )
  }
}

export default Counter;