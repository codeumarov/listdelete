
import { students } from './Data'
import React from 'react'

class Crud extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: students,
      name: 'name',
      selected: 'name',
      selektedUser: ' ',
    }
  }


  render() {

    const onDelete = (id) => {
      const res = this.state.data.filter((value) => value.id !== id)
      this.setState({ ...this.state, data: res })
    }

    const inpVAlue = (e) => {
      const { value, name } = e.target
      this.setState({ ...this.state, [name]: value })
      console.log({ [name]: value });
    }

    const onSearch = (name) => {
      const res = students.filter((username) => username[this.state.selected].toString().toLowerCase() === name.toString().toLowerCase())
      this.setState({ ...this.state, data: res })
    }
    const onSelect = (e) => {
      const { value } = e.target
      this.setState({ ...this.state, selected: value })
    }

    const onUpdate = (student) => {
      this.setState({ ...this.state, selektedUser: student })
    }

    const inputSave = (e) =>{
      const {value, name} = e.target
      this.setState({...this.state, selektedUser: {...this.state.selektedUser, [name]: value}})
    }

    const onSave = () => {
      const res = this.state.data.map((student) => student.id === this.state.selektedUser.id ? this.state.selektedUser : student)
      this.setState({...this.state, data: res, selektedUser: " "})
    }

    return (
      <div>
        <input onChange={inpVAlue} name='name'></input>
        <select onChange={onSelect}>
          <option value='id'>id</option>
          <option value='name' selected>name</option>
        </select>
        <button onClick={() => onSearch(this.state.name)}>Search</button>
        {this.state.data.map((student) => (
          <li key={student.id}>
            {student.id} -
            {!this.state.selektedUser ? student?.name : this.state.selektedUser.id === student.id ? <input  name='name' onChange={inputSave} value={this.state.selektedUser.name}></input> : student.name}
            <button onClick={() => onDelete(student.id)}>Delete</button>
            {this.state.selektedUser.id !== student.id
              ?
              <button onClick={() => onUpdate(student)}>Update</button>
              :
              <button onClick={onSave}>save</button>
            }
          </li>
        ))}
      </div>
    )
  }

}

export default Crud


