import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function WhoAmI({name, surname, link}) {
  return (
    <div>
        <h1>My name is {name()}, surname - {surname}</h1>
        <a href={link}>My profile</a>
    </div>
  )
}

function App() {

  const data = [
    {name: 'John C.', salary:800, increase: true}, 
    {name: 'Alex D.', salary:3000, increase: false}, 
    {name: 'Carl W.', salary:3500, increase: true}
  ];


  return (
    <div className="app">
      <WhoAmI name={() => {return 'John'}} surname='Smith' link='facebook.com'/>
      <WhoAmI name={() => {return 'Alex'}} surname='Shepard' link='vk.com'/>
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
