import React  from 'react';
import './App.css';
import Header from './components/Header';
import InputBox from './components/InputBox';
import TaskList from './components/TaskList';
// import Footer from './components/Footer';

function App() {


 

  return (
  
      <div className="App">
            <Header />
            <div className="flash-msg">
                What is your main focus for today ?
            </div>
            <InputBox />
            <TaskList />
          
      </div>
     
    
   
  )
}

export default App

