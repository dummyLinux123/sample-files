import './App.css';


import Header from './components/Header';
import { Routes,Route } from 'react-router-dom';

import Page1Component from './Pages/Page1Component';
import Page2Component from './Pages/Page2Component';



function App() {
  return (
    <div style={{
        height:"100vh", 
        display:"grid",
        gridTemplateColumns:"20vw 20vw 20vw 20vw 20vw", 
        gridTemplateRows:"10vh 22.5vh 22.5vh 22.5vh 22.5vh"
    }}>


      {/* header component */}
      <div style={{
        display:"grid", 
        gridColumnStart:"1", 
        gridColumnEnd:"6",
        border:"1px solid black"
      }}>
        <Header/>
      </div>


      {/* sidebar component */}
      <div style={{
        display:"grid", 
        gridColumnStart:"1", 
        gridColumnEnd:"1",
        gridRowStart:"2",
        gridRowEnd:"6",
        border:"1px solid violet"
      }}>
        <h1>sidebar</h1>
      </div>



      {/* main data component */}
      <div style={{
        display:"grid", 
        gridColumnStart:"2", 
        gridColumnEnd:"6",
        border:"1px solid blue",
        gridRowStart:"2",
        gridRowEnd:"6"
      }}>

        <Routes>
          <Route
            path="/page1"
            Component={Page1Component}
          />
            
          

          <Route
            path="/page2"
            Component={Page2Component}
          />
            
          
        </Routes>

       


      </div>
    </div>
   
  );
}

export default App;
