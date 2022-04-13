import React from 'react'
import checkmark from "../images/checkmark.png"

export default class Todo extends React.Component {
  constructor(){
    super()
  }

  render() {
    const {item} = this.props
    console.log("from todo")
    // console.log(key)
    return (
      <div onClick= {this.props.toggleComplete} key={item.id} id={item.id} className='todo'>
        {item.name}
        {item.completed && <img src={checkmark} alt="icon of checkmark" width="12"></img> }
      </div>
    )
  }
}
