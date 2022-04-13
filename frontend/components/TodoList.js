import React from 'react'
import Todo from "./Todo"

export default class TodoList extends React.Component {
  constructor(){
    super()
  }
  render() {
    const {todoList} = this.props
    console.log("coming from todolist ")
    console.log(todoList[1])
    return (
      <div>
        <h2>Todo List</h2>
        {todoList.map((item)=>(
          <Todo toggleComplete = {this.props.toggleComplete} key={item.id} item={item}></Todo>
        ))}
        
      </div>
    )
  }
}
