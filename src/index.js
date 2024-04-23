import React from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components'
import App from './Pages/Home';
import Survey from './Pages/Survey';
import Header from './Components/Header';
import Result from './Pages/Results';
import Freelance from './Pages/Freelances';
import Error from './Components/Error';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { SurveyProvider, ThemeProvider } from './Tools/Context';
import Footer from './Components/Footer';
import GlobalStyle from './Tools/Style/GlobalStyle';

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

/*
const GlobalStyle = createGlobalStyle`
  div {
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
  }
`
*/

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/survey/:questionNumber" element={<Survey />}/>
        <Route path="/Result" element={<Result />}/>
        <Route path="/Freelance" element={<Freelance />}/>
        <Route path="*" element={<Error />}/> {/** Return the Error component in every invalid URL */}
      </Routes>
      <Footer/>
      </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
