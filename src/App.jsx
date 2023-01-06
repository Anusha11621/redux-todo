import React, { Component } from 'react'
import { connect } from 'react-redux'
import {inputValue,addTodo} from './store'
import Todo from './components/Todos'

class App extends Component {
  constructor(props){
    super()
  }
  inputchange = (e)=>{
    this.props.inputValue(e.target.value)
  }

  addtodoItems = (e)=>{
    if(e.key === 'Enter'){
      this.props.inputValue('')
    this.props.addTodo(e.target.value)
    }
    
  }
  render() {
    return (
      <div className='d-flex  flex-column justify-content-center '>
        <input
        placeholder='Add todo'
        value = {this.props.state.input}
        onChange = {this.inputchange}
        onKeyUp = {this.addtodoItems}
        />
        <Todo/>
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
  inputValue: inputValue,
  addTodo: addTodo

}


export default connect(mapStateToProps, mapDispatchToProps)(App)
