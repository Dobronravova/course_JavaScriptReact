class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 0
      }
    }
      min = -50;
      max = 50;
    
     incCounter = () =>{
       if (this.state.counter < this.max) {
        this.setState(state => ({
          counter: ++state.counter
        }))
       }
    }
    
    decCounter = () =>{
       if (this.state.counter > this.min) {
        this.setState(state => ({
          counter: --state.counter
        }))
       }
    }
  
    rndCounter = () =>{
      this.setState(state => ({
       counter: Math.floor(this.min + (Math.random() * (this.max - this.min)))
      }))
    }
    
    resetCounter = () =>{
      this.setState(state => ({
       counter: 0
      }))
    }
    
    
    
    // Используйте только стрелочную форму методов
    // Почему? Подробный ответ будет в следующем уроке
    
    render() {
      return (
        <div class="app">
          <div class="counter">{this.state.counter}</div>
          <div class="controls">
            <button onClick={this.incCounter}>INC</button>
            <button onClick={this.decCounter}>DEC</button>
            <button onClick={this.rndCounter}>RND</button>
            <button onClick={this.resetCounter}>RESET</button>
          </div>
        </div>
      )
    }
  }
  
  ReactDOM.render(<App/>, document.getElementById('app'));
  
  // 1) Начальное значение счетчика должно передаваться через props
  // 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
  // 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
  // 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов