// import React from 'react'
// import firebase from '../firebase';
// import DeleteIcon from '@material-ui/icons/Delete';

// function DeleteBtn({ todo }) {

//     const deleteTodo = () =>{
//         const todoRef = firebase.database().ref("Todo").child(todo.id);
//         todoRef.remove();

//       };


//     return (
//         <div className="del">
//                  <div className="del-icon">
//                         <DeleteIcon id="style-del-icon" onClick={deleteTodo} />
//                  </div>
//          </div>
//     )
// }

// export default DeleteBtn
