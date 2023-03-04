
import { users } from './Data'
import React from 'react'

import '../src/Task.css'

class CrudUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: users,
      selectedValue: 'name',
      ism: ' ',
      stat: ' ',
      age: +' ',
      name: ' ',
      isName:' '
    }
  }

  render() {

    // malumotlarni Search qilish
    const onSearch = (e) => {
      const { value } = e.target
      const ras = users.filter((use) => use[this.state.selectedValue].toString().toLowerCase() === value.toString().toLowerCase())
      this.setState({ ...this.state, data: ras })
    }

    // malumotlarni o'chirish
    const onDelete = (user) => {
      const res = this.state.data.filter((student) => student.id !== user.id)
      console.log(res);
      this.setState({ ...this.state, data: res })
    }

    //  Id, Ism, Status, va age boyicha saralash
    const onSelect = (e) => {
      const { value } = e.target
      console.log(value);
      this.setState({ ...this.state, selectedValue: value })
    }

    const onNameAdd = (e) => {
       const {value} = e.target
       this.setState({...this.state, ism: value})
       console.log(this.state.ism);
    }

    const onStatusAdd = (e) => {
      const {value} = e.target
      this.setState({...this.state, stat: value})
      console.log(this.state.stat)
    }

    const onAgeAdd = (e) => {
      const{value} = e.target
      this.setState({...this.state, age: value})
      console.log(this.state.age);

    }

    const userName = (name)=>{
       
    }

    const onbtnDataAdd = (users) => {
      console.log([...this.state.data, {id: 6, name:users.ism, status:users.stat, age:users.age}])
      this.setState([...this.state.data, {...this.state.data, id: 6, name:users.ism, status:users.stat, age:users.age}])
    }

    const onUpdate = (e) => {
      const {value, isname} = e.target
      this.setState({...this.state, isName: {...this.state.isName, [isname]: value}})
    }

    return (
      <>
        <div className='container'>
          <div className='content'>
            <h1 className='title'>Webbrain Academy</h1>
            <div className='inp'>
              <input placeholder='Search...' onChange={onSearch} ></input>
              <select onChange={onSelect}>
                <option value='id'>id</option>
                <option value='name' selected>name</option>
                <option value='status'>status</option>
              </select>
            </div>
            <div className="shortContainer">
              <div className='userTitle'>
                <div>Id</div>
                <div>Name</div>
                <div>Status</div>
                <div>age</div>
                <div>Edit</div>
              </div>
            </div>
            <div>
              {
                this.state.data.map((user) => (
                  <div className='users' key={user.id}>
                    <div className="userData" id="numberId"><input name='name' value={user.id}></input></div>
                    <div className="userData text"><input  name='isname'value={user.name} onChange={userName}></input></div>
                    <div className="userData text"><input name='name' value="Umarov"></input></div>
                    <div className="userData " id="numberId"><input name='name' value={user.age}></input></div>
                    <div><button className="del" onClick={() => onDelete(user)}>Del</button></div>

                    <div><button className="del" onClick={() => onUpdate(user)} name='p'>Upd</button></div>

                  </div>
                ))
              }
            </div>
          </div>
          <div className='footer'>
            <input placeholder='name' onChange={onNameAdd} type="text" name='ism'></input>
            <input placeholder='status' onChange={onStatusAdd} type='text' name='stat'></input>
            <input placeholder='age' onChange={onAgeAdd} type='number' name='age'></input>
            <button className='btn' onClick={() => onbtnDataAdd()} name='p'>Add</button>
          </div>
        </div>
      </>
    )
  }
}
export default CrudUser