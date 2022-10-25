import './App.css';
import React from 'react'
import Sidebar from './components/SideBar/Sidebar.js';
import Feed from './components/Feed/Feed'
import Widgets from './components/Widgets/Widgets'
function App() {
  return (
    <div className='app'>
      <Sidebar/>

      <Feed />

      <Widgets/>
    </div>
  );
}

export default App;
