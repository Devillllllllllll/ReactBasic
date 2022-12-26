import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import HelloComponent from './components/HellComponent';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// การสร้าง Compoment
// class HellotombComponent extends React.Component {
//     render() {
//       return <h1>HelloTomb TM</h1>
//     }
// }

ReactDOM.render(<App />,document.getElementById('root'));
// ReactDOM.render(<HelloComponent />,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
