import React, { Component } from 'react';

class Calc extends Component {

  state = { 
    value: '',
    result: null
  }

  render() {
    return (
        <div className='calculator'>
            <h1 style={{alignSelf: 'center', fontSize:'64px' }}><span role="img" aria-label="Попугай">🐦</span></h1>
            <p>
                <span>Введите длину в сантиметрах: </span>
                <input value={this.state.value} onChange={event => this.setState({value: event.target.value})}/>
            </p>
            {this.state.result ? <p>В попугаях это: {this.state.result}</p> : null}
            <div className='calculator-control'>
                <button onClick={event => this.setState({result: this.state.value/36})}>Посчитать</button>
                <button className='back-btn' onClick={event => this.props.onBack()}>Что происходит?</button>
            </div>
        </div>
    );
  }
}

export default Calc;
