import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from "./navbar"
import Content from './content';
import Subscription from './subscription';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <div className='main-div'>
      <Navbar />
      <Content />
      <Subscription/>
    </div>
);


