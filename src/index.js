import React from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Pages/Home';
import Survey from './Pages/Survey';
import Header from './Components/Header';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/survey" element={<Survey />}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();