

import React from "react";

class Task extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      option: '50%',
      width: ' ',
      color: ' ',
      height: ' ',
      natija: ' ',
    }
  }
  render() {
    const color = (e) => {
      this.setState({ color: e.target.value })
    }

    const widthShape = (e) => {
      this.setState({ width: e.target.value })
    }


    const heightShape = (e) => {
      this.setState({ height: e.target.value })
    }

    
  

    return (
      <div>
        <h1>Task</h1>
        <select>
          <option value='0%'>Defaulrt</option>
          <option value='50%'>Cirkol</option>
        </select>
        choose color: <input placeholder="color" onChange={color}></input>
        append width: <input placeholder="width" onChange={widthShape}></input>
        append height: <input placeholder="height" onChange={heightShape}></input>
        <div style={{borderRadius: this.state.option ? this.state.option: null, width: this.state.width + 'px', height: this.state.height + 'px', backgroundColor: this.state.color}}></div>
       
        {/* <button onClick={btn}>onSubmit</button> */}
        
        

      </div>
    )
  }
}

export default Task