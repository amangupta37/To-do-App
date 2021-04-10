import React from 'react';
import './App.css';
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';

function App() {
  return (
  
      <div className="App">

          <div className="Title-txt">
              <div className="Outline-l">
                   <FormatListBulletedOutlinedIcon />
              </div>
              <div className="txt">
                    <h1>To-Do List</h1>
              </div>
          </div>


          <div className="flash-msg">
            What is your main focus for today ?
          </div>


          <div className="todo-main">
            <div className="search-box">
                <div className="input-data">
                    <input id="inp-box" type="text" placeholder="Write a to-do" />
                </div>
                <div className="add-btn">
                  <AddCircleOutlineIcon className="size-icon" />
                </div>
              </div>
          </div>
         

          <div className="task-list">

              <div className="hold-data">
                  <div className="done">
                      <div className="check">
                      1
                      </div>
                  </div>
                  <div className="tasks">
                      <div className="display-task">
                       Hello this is my 1st to do task 
                      </div>
                  </div>
                  <div className="del">
                      <div className="del-icon">
                          <DeleteIcon id="style-del-icon" />
                      </div>
                  </div>
              </div>

          </div>
      </div>
     
    
   
  )
}

export default App

