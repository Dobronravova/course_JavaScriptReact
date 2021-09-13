import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const elem = (
  <div>
    
    
  </div>
)

const Header = () => {
  return <h2>Hello</h2>
}

const Field = () => {
  const holder = "Enter here";
  const styledField = {
    width: '300px'
  }
  return <input 
              style={styledField}
              type="text" 
              placeholder={holder}
              autoComplete=""
              className="first"
              htmlFor=""
  />
}

const Btn = () => {
  const text = "Log in";
  const logged = true;
  const res = () => {
    return 'Log in, please'
  };
  const p = <p>Log in</p>;
  return <button>{logged ? "Enter" : text}</button>
  // return <button>{text}</button>;
  // return <button>{res()}</button>
  // return <button>{p}</button>
  // return <button>{3+4}</button>
}

const App = () => {
  return (
    <div>
      <Header />
      <Field />
      <Btn />
    </div>
  )
}

// const elem = React.createElement('h2', null, 'Hi')

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

ReactDOM.render(<App/>, document.getElementById('root'));
