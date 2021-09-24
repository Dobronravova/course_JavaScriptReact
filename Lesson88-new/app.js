import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

// import'./app.css';
// import style from './App.module.css';
import styled from 'styled-components';
const AppBlock = styled.div`
.app {
    margin: 0 auto;
    max-width: 800px;
  }  
`;

const Header = () => {
    return <h2>Hello</h2>
}


// const Field = () => {
//     const holder = 'Enter here'
//     const styledField = {
//         width: '20vw',
//         marginRight: '1vw'
//     }
//     return <input placeholder={holder} type='text' style={styledField}/>
// }

//классовый подход
 
class Field extends React.Component{ //наследуем все из React.Component
    render() {
        const holder = 'Enter here'
        const styledField = {
            width: '20vw',
            marginRight: '1vw'
        }
        return <input placeholder={holder} type='text' style={styledField}/>
    };
}


function Btn() {
    const text = 'Log in'

    // const res = () => {
    //     return 'Log in'
    // }
    const p = <p>Log in</p>
    const logged = true; //false

    // return <button>{text}</button>

    // return <button>{res()}</button>
    return <button>{logged ? 'Enter' : text}</button>
} //можно создавать компоненты с помощью функций




const App = () => {

    const data = [
        {
            label: 'Going to learn React',
            important: true,
            id: 'jhg'
        },
        {
            label: 'That is so good',
            important: false,
            id: 'joi'
        },
        {
            label: 'I need a break...',
            important: false,
            id: 'jvg'
        }
    ];

    return (
        <div className='App'>
            <Header/>
            <Field/>
            <Btn/>
            <AppBlock>
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList posts={data} 
                onDelete={ id => console.log(id)}/>
                <PostAddForm/>
            </AppBlock>
        </div>
    )
}

export {Header}; //экспорт в другой компонет
export default App;