

import React from "react";
import { users } from "./Users";

class Students extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data: users,
      name: ' '
    }
  }

  render(){
   const  dele = (id) => {
      const res = this.state.data.filter((student) => student.id !== id)
      this.setState({data: res})
   }

   const userAdd = (e) =>{
      const {value, name} = e.target
      this.setState({[name]: value})
   }

   const addUser = (name) => {
     const newUser = {id: this.state.data.length + 1, name: name}
     this.setState({data: [...this.state.data, newUser], name: ' '})
     console.log(newUser);
   }

    return(
      <> 
         <h2>Students info</h2>
         {
           this.state.data.map((students) =>(
             <div   key={students.id}>{students.id} {students.name}  <button onClick={() => dele(students.id)}>Delete</button></div>
           ))
         }
         <input value={this.state.name} onChange={userAdd} name='name'></input>
         <button onClick={() => addUser(this.state.name)}>Add user</button>
      </>
    )
  }
}

export default Students