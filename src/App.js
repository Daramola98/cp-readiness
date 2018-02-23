import React, {Component} from 'react';
import './App.css';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
    this.handlerOnChange = this.handlerOnChange.bind(this);
    this.handlerOnSubmit = this.handlerOnSubmit.bind(this);
  }

  handlerOnChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  handlerOnSubmit(event) {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
    document.getElementById('todoInput').focus();
  }

  render() {
    return ( 
    <div >
      <h1> React App Todo List </h1> 
      <form className="App" onSubmit = {this.handlerOnSubmit } >
      <input id="todoInput" type="text" value={this.state.term} onChange={this.handlerOnChange} required/>
      <button type = "submit"> Add Todo </button> 
      </form> 
  <List items = {this.state.items}/> 
  </div>
    );
  }
}

export default App;