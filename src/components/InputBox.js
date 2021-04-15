import React,{useState} from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
// import './App.css'
import firebase from '../firebase';

function InputBox() {


  //----------reading data form input box-------------
  
  const [title, setTitle] = useState('');

  const handelOnChange = (e) =>{

   
        setTitle(e.target.value);
    
  }


  //-----------Event handler for pushing data to database----------------

  const createTodo = () =>{

    const todoRef = firebase.database().ref("Todo"); // refer to database

    // data to store into database in object formate 
    const todo = {
      title,
      complete : false,
    };

    // applying conditions before pushing data into the database
    
       if(todo.title === "" || todo.title === " ")
       {
            alert("Please Enter a Todo");
       }
       else
       { 
           todoRef.push(todo); //pushing data into database
       }

       setTitle(''); // cleaning input box after submiting data to the database
  }


  const handelPress = (e) =>{

    if(e.key === 'Enter')
    {
       createTodo();
    }
  }

  return (
        <div className="todo-main">
        <div className="search-box">
            <div className="input-data">
                <input id="inp-box" type="text" placeholder="Write a to-do" autoComplete="off"  required onChange={handelOnChange} onKeyPress={handelPress}   value={title} />
            </div>
            <div className="add-btn">
              <AddCircleOutlineIcon  className="size-icon" onClick={createTodo}  />
            </div>
          </div>
      </div>
    )
}

export default InputBox;
