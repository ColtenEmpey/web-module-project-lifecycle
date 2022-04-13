import React from 'react'

export default class Form extends React.Component {
  constructor(){
    super()
    this.state= {
      name:"",
    }
    
  }
  handleSubmit = (e) =>{
    e.preventDefault()
    this.props.addTodo(this.state.name)
    this.setState({
      name:"",
    })
    //need a function instead of push that will push an entire object.
    // this.props.todoList.push(e.target.value);
  }
  handleChange=(e)=>{
    this.setState({
      name: e.target.value
    })
    
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
           value={this.state.name} 
           onChange={this.handleChange}
           placeholder='Thing to do'></input>
          <button type="submit" >Add Todo!</button>
        </form>
      </div>
    )
  }
}
