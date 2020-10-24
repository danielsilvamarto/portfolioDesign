import React from 'react';
import FrontP from './Components/frontPage/frontPage.jsx';
import ToDo from './Components/toDo/toDo.jsx';
import AboutMe from './Components/aboutMe/aboutMe.jsx';

import './App.css';

function App() {
  return (
    <div className="appLay">
      <FrontP />
     
       <AboutMe />
      <ToDo />
      
    </div>
  );
}

export default App;
