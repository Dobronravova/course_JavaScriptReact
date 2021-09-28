import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';
import {Component} from 'react';

// Привязка this 
class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27, 
      text: '++',
      position: ''
    }
    //1. жесткая привязка this с помощью bind
    this.nextYear = this.nextYear.bind(this);
  }

  //2. привязка this через стрелочную функцию
  // nextYear = () =>{
  nextYear() {
      this.setState(state => ({
        years: state.years + 1
      }))
    }


  commitInputChanges = (e, color) =>{
    // console.log(e.target.value)
    console.log(color);
    this.setState({
      position: e.target.value
    })
  }
  render() {
    const {name, surname, link} = this.props;
    const {position, years} = this.state;
  
    console.log(this)

    
    return (
      <div>
          {/* <button onClick={this.nextYear}>{this.state.text}</button> */}
          {/* // 3. через анонимную стрелочную функцию */}
          <button onClick={() => this.nextYear()}>{this.state.text}</button>
          
          <h1>My name is {name}, surname - {surname}, age - {years}, position - {position}</h1>
          <a href={link}>My profile</a>
          <form>
            <span>Введите должность</span>
            {/* //передача аргумента метода в вызов функции */}
            <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')}/>
          </form>
      </div>
    )
  }
}

function App() {

  const data = [
    {name: 'John C.', salary:800, increase: true, id: 1}, 
    {name: 'Alex D.', salary:3000, increase: false, id: 2}, 
    {name: 'Carl W.', salary:3500, increase: true, id: 3}
  ];


  return (
    <div className="app">
      <WhoAmI name='John' surname='Smith' link='facebook.com'/>
      <WhoAmI name='Alex' surname='Shepard' link='vk.com'/>
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList data={data}/>
        <EmployeesAddForm/>
    </div>
  );
}

export default App;
