import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTodo,toggleTodo,searchTodo } from '../store'
import '../App.css'
class Todos extends Component {
    constructor(props){
        super(props)
    }
    deleteHandler = (e) => {
        this.props.deleteTodo(e.target.id)
    }
    strikeHandler = (id)=>{
        console.log(this.props.toggleTodo(id));
        // this.props.toggleTodo(id)
    }
    searchHandler = (e)=>{
        console.log(this.props.searchTodo);
        this.props.searchTodo(e.target.value)
    }
  render() {
    return (
      <div className='d-flex flex-column justify-content-center'>
        <input type={'text'}
        placeholder='search'
        onChange={this.searchHandler}
        ></input>
        {
            this.props.state.todos.map((data)=>{
                console.log(data.status);
                return <div key = {data.id} className='d-flex gap-3 align-items-center'>
                    <div className={data.searchvalue === true?'d-block d-flex gap-3 align-items-center':"d-none d-flex gap-3 align-items-center"}>
                    <input type='checkbox' onClick={()=>{
                        return this.strikeHandler(data.todoId)
                        }} />
                    <p className={data.status === 'active'?' ':'strike'}>{data.task}</p>
                    <button className='btn ' onClick={this.deleteHandler} id={data.todoId}>Delete</button>
                    </div>
                </div>
            })
        }
      </div>
    )
  }
}
function mapStateToProps(state) {
    return {
        state: state
    }
}
const mapDispatchToProps = {
    deleteTodo: deleteTodo,
    toggleTodo:toggleTodo,
    searchTodo:searchTodo
}

let Todo = connect(mapStateToProps, mapDispatchToProps)(Todos)
export default Todo