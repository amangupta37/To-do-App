import React,{useEffect,useState} from 'react'
import EditIcon from '@material-ui/icons/Edit';
import firebase from '../firebase';
// import DeleteBtn from '../components/DeleteBtn';
import DeleteIcon from '@material-ui/icons/Delete';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';
// import CheckIcon from '@material-ui/icons/Check';
import DoneIcon from '@material-ui/icons/Done';
function HoldData() {

    const [todolist,setTodolist] = useState();

    //---------------Reteriving data from database--------------------
    
      useEffect(() => {
        const todoRef = firebase.database().ref("Todo");
        todoRef.on("value",(snapshot) =>{
          
          const todos = snapshot.val();
    
          const todolist = []; //array for storing todo msg by id
    
            
        //   console.log(id);

          for(let id in todos)  // iterating through each id stored in object formate 
          {     
           
            todolist.push({id, ...todos[id]}); // pushing id into an array 
           }
        //   console.log(todolist);
          setTodolist(todolist);

        
    
        } );
    
      }, [])

    
    
    

    return (
    
     <div className="users-new-data">
     
    
     {/*-----------------Injecting data dynamically form database---------------*/}


     { todolist ? todolist.slice(0).reverse().map((todo)=>

        <div className="hold-data">

          <div className="done">
                <div className="check done-check">
                   <DoneIcon className={ todo.complete ? "style-check":""} onClick={()=>{

                    //-------------------- check uncheck task  -----------------------

                    const todoRef = firebase.database().ref("Todo").child(todo.id);
                    todoRef.update(
                        {
                            complete : !todo.complete
                        }
                    );
                }}
                   
                   
                   />
                </div>
          </div> 

          <div className="task">
                     <div className="display-task">
                        <div className={ todo.complete ? "status":""}>
                         {todo.title}
                         </div>
                      </div>

                      <div className="timeline">
                        created @ 12.03.2020 2:00pm
                      </div>
          </div>

          <div className="edit">
                <div className="edit-icon">
                        <EditIcon id="style-edit-icon"/>
                </div>
         </div>
         

         <div className="del">
                 <div className="del-icon">
                        <DeleteIcon id="style-del-icon" onClick={ () => {

                            //------------Delete operation -----------------------

                            const todoRef = firebase.database().ref("Todo").child(todo.id);
                            todoRef.remove();
                        }
                    } />
                 </div>
                 
         </div>
         

        </div>):"" 
     }
        </div>


    )
}

export default HoldData
