import React from 'react';
import FrontP from './Components/frontPage/frontPage.jsx';
import ToDo from './Components/toDo/toDo.jsx';
import AboutMe from './Components/aboutMe/aboutMe.jsx';
import Madagascar from './Components/madagascar/madagascar.jsx';
import Footer from './Components/footer/footer.jsx';



import './App.css';



function App() {
  return (
    <div className="appLay">
      <FrontP />
      <AboutMe />
      <Madagascar/>
      <ToDo />
      <Footer />
    </div>
  );
}

export default App;
