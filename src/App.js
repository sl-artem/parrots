import React, { Component } from 'react';
import Calc from './Calc';

class App extends Component {

  state = { 
    welcome: true,
  }

  render() {
    const Welcome = (props) => (
      <div className='welcome'>
        <h1>Сколько это в попугаях?</h1>
        <h2>Бессмысленный калькулятор</h2>
        <p className='welcome-intro'>Конвертируйте любое число в папугаев. За стандарт взята длина тела взрослой особи <a href='https://ru.wikipedia.org/wiki/Роскошный_попугай_Александры'>Роскошного попугая Александры</a> — 36 см.</p>
        <button onClick={event => this.setState({welcome: false})}>Начать</button>
      </div>
    )

    return (
      <div className='app'>
        {this.state.welcome ? <Welcome/> : <Calc onBack={() => this.setState({welcome: true})}/>}
      </div>
    );
  }

}

export default App;
