import React from 'react';
import './App.css';
import {Questioner} from "./components/Questioner";

function App() {
  return (
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex
                      justify-center items-center">
        <Questioner/>
      </div>
  );
}

export default App;
