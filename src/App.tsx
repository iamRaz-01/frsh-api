import './assets/css/App.css';
import React from 'react';
import { Header } from './components/header/Header';
import {Tab, ITab} from './components/Tab/Tab'

export const  App = () => {
   

  const tab : ITab = {
    label : 'All Projects',
    children : null ,
    isPaginate : true ,
    maxChildren : 5,
  }
  const tab1 : ITab = {
    label : 'My Projects',
    children : null ,
    isPaginate : true ,
    maxChildren : 5,
  }

  return (
    <div className="App">
       <Header />
       <Tab  tabs={[tab,tab1]} /> 
    </div>
  );
}


