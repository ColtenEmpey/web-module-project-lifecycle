import React from 'react'
import TodoList from "./TodoList"
import Form from "./Form"
import axios from 'axios'

const URL = 'http://localhost:9000/api/todos'
const defaultArr = [{
  id: 'KNHwJ',
  name: 'laundry', 
  completed: false
}]

const fetchTodos = () =>{
  return axios.get(URL)
    .then( res => {
      console.log("fetching")
      console.log(res.data.data[0].name)
      return res
    })
    .catch( err => console.error(err))
}

export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      todoList: []
    }
    this.toggleComplete = this.toggleComplete.bind(this)
  }

  // fetchTodos = () =>{
  //   axios.get(URL)
  //     .then( res => {
  //       console.log("fetching")
  //       console.log(res.data.data)
  //       this.setState({
  //         todoList: res.data.data
  //       }) 
  //     })
  //     .catch( err => console.error(err))
  // }
  componentDidMount(){
    fetchTodos()
      .then(res => {
        // console.log(res)
        this.setState({
            todoList: res.data.data 
          })
      })
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("App: Component has updated")
    console.log(this.state.todoList[0].name)    
  }



  toggleComplete(e) {
    const newArray = [...this.state.todoList]
    const index = newArray.findIndex((item) => item.id === e.target.id)
    if (index != -1){ 
      axios.patch(URL + "/" + e.target.id)
        .then( res => {
         const newItem = res.data.data
         newArray.splice(index, 1, newItem)
         this.setState({
           todoList: newArray
         })
        })
        .catch( err => console.error(err))
      
    }
    else{ console.log(newArray)}
  }
  addTodo=(item)=>{
    axios.post(URL, {
      name: item
    })
    .then((res)=>{
      console.log(res)
      const newItem = res.data.data
      const currentList= this.state.todoList
      // console.log("adding")
      // console.log(currentList)
      this.setState({
        todoList: [...currentList, newItem]
      })
    })
    .catch((err)=> console.error(err))

    // const newItem={
    //   id: Date.now().toString(),
    //   name: item,
    //   completed: false
    // }
    
    
    
  }
  render() {
    console.log("rendering")
    // console.log(this.state.todoList)
    const {todoList} = this.state
    console.log(todoList[0])
    return (
      <div>
        <TodoList toggleComplete = {this.toggleComplete} todoList = {todoList}></TodoList>
        <Form todoList ={todoList} addTodo={this.addTodo}></Form>
      </div>
    )
  }
}

