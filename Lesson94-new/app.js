import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

// 1.У компонента может быть внутреннее стостояние, которое динамически меняется
// 2.Оно может быть и классовых и у функциональных компонентов
// 3.State напрямую менять нельзя, только через команду setState
// 4.setState и в целом изменение state асинхронная операция, 
// если нужна точность и последовательность этих данных, мы передаем setState
// 5.В команде setState мы можем менять только те состояния, которые нам нужны, 
// остальные останутся неизменными

// function WhoAmI({name, surname, link}) {
//   return (
//     <div>
//         <h1>My name is {name()}, surname - {surname}</h1>
//         <a href={link}>My profile</a>
//     </div>
//   )
// }

// передалка на классовые компоненты
import {Component} from 'react';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27, 
      text: '++'
    }
  }
  nextYear = () =>{
    //изменение стейта через setState, напрямую не сработает
    //если state напрямую зависит от предыдущего состояния, 
    // чтобы ничего не сбилось, 
    // используем стрелочную функцию
    this.setState(state => ({
      years: state.years + 1
    }))
  }
  render() {
    const {name, surname, link} = this.props;
    return (
      <div>
          <button onClick={this.nextYear}>{this.state.text}</button>
          <h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
          <a href={link}>My profile</a>
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
