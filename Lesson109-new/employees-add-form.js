import { Component } from 'react';
// import './employees-add-form.css';
import './employees-add-form.scss';





class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

//Классовые компоненты
//Class fields - фишка, которая добавится в стандарт в 22 году
//похожее мы делали - методы описанные стрелочной функцией для закрепления контекста вызова
//создание любых свойств без конструктора - 
// class EmployeesAddForm extends Component {
//     state = {
//         name: '',
//         salary: ''
// }
//ключевое свойство - static
//использование метода без создания экземпляра класса, а сразу напрямую
//для применения статичности нужно перед методом добавить ключевое слово static

// static onLog = () => {
//     console.log('Hey')
// }

// static logged = 'on';

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onAdd = (e) => {
        e.preventDefault();
        if (this.state.name.length > 2 && this.state.salary !== ''){
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })}
    }

    render () {
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        name="name"
                        // value={this.state.name}
                        value={name}
                        onChange={this.onValueChange}
                        required="required"  minLength={3}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        name="salary"
                        // value={this.state.salary}
                        value={salary}
                        onChange={this.onValueChange}
                        required="required"  minLength={2}/>
    
                    <button type="submit"
                            className="btn btn-outline-light"
                            onClick={this.onAdd}
                            >Добавить</button>
                </form>
            </div>
        )
    }
}

// EmployeesAddForm.onLog();
// console.log(EmployeesAddForm.logged)
export default EmployeesAddForm;