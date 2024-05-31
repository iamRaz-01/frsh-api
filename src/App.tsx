import './assets/css/App.css';
import React from 'react';
import { Header } from './components/header/Header';
import {Tab, ITab, ITabchildren} from './components/Tab/Tab'
import { Project } from './components/project/Project';
import img from './assets/images/logo.png'
import user from './assets/images/user.jpeg'

export const  App = () => {
  const child : ITabchildren = {
    child : {
      creator :'abdul',
      title :'Abacus Api Contract',
      description :'Api contracts for policies and business hour',
      img :img,
      versions :[1,3],
      modified : 'sss',
      mainVersion : 1 
    }
  }
  const child2 : ITabchildren = {
    child : {
      creator :'razak',
      title :'razak',
      description :'razak',
      img :user,
      versions :[1,3],
      modified : 'sss',
      mainVersion : 1 
    }
  }

  const tab : ITab = {
    label : 'All Projects',
    children : [child , child , child ,child,child , child , child ,child],
    isPaginate : true ,
    maxChildren : 5,
    Component : Project
  }
  const tab1 : ITab = {
    label : 'My Projects',
    children : [child2 , child2 , child2 , child2 ],
    isPaginate : true ,
    maxChildren : 5,
    Component : Project
  }
 
  

  return (
    <div className="App">
       <Header />
       <div className='main'>
       <Tab  tabs={ [tab,tab1]}/>  <button></button>
       </div>
    </div>
  );
}


