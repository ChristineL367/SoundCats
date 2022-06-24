import React from 'react';
import Login from './Login.jsx'
import './App.css';
import Dashboard from "./Dashboard.jsx"

const code = new URLSearchParams(window.location.search).get("code")

async function redirection(){
    return code ? <Dashboard code={code} /> : <Login />
  }

function App() {
  return (

    <main>
      
      <div id="title">//SOUNDCATS//
      
      </div>
      
        <button type="button" id="myBtn" onClick={redirection}>
          <img src="src/settings.png" id="settings_icon"  />
          </button>
        
        <img src='src/add_song.png' id="add_song_icon"/> 
        <img src='src/socials.png' id="socials_icon"/>
        <img src='src/question.png' id="question_icon"/>
        <img src='src/cat.png' id="cat_icon"/>
      <video loop autoPlay muted id= "background">
        <source src={'../vaporwave.mp4'} type="video/mp4"/>
      </video>
        <h1 id= "scrolling_box">
    <span> </span>
    </h1>
    
      
      
  

   
  
    </main>
  );
}

export default App;
