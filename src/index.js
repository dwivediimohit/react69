import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import './Style.css';
import Myabout, { Mycontainer, Mycss, Mypage } from './About';
import Mybootsrap from './Mybootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Mycontainer></Mycontainer>
  <Myabout></Myabout>
  <Mycss></Mycss>
  <Mybootsrap></Mybootsrap>
  <Mypage></Mypage>
  </React.StrictMode>



);
<noscript></noscript>
