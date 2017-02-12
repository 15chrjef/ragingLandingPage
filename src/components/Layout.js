import React, { Component } from 'react';
import '../App.css';
import Time from './Time';
import Calendar from './Calendar';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      to: {
        date: '',
        hour: '',
        min: '',
        "am/pm": '',
        type: 'to'
      },
      from: {
        date: '',
        hour: '',
        min: '',
        "am/pm": '',
        type: 'from'
      }
    }
  }
<<<<<<< 72ab93fef20e1731909b7a07c506e27feb95b4c3
=======
  colonChecker (i, string, currentString){
    if(string[i] === ':' && string[i + 3] === ' ' && (currentString.length === 2 || currentString.length === 1)) {
      return true
    }
    return false
  }  
  checkLastTwo(message, i){
    var numbers = '0123456789';
    if(numbers.indexOf(message[i + 1]) > -1 && numbers.indexOf(message[i + 2]) > -1){
      return true
    }
    return false
  }
  findTime(message){
  var numbers = '0123456789';
  var currentString = '';
  for(var i = 0; i < message.length; i++) {
    if(numbers.indexOf(message[i]) > -1) {
      currentString += message[i]
    }else if(this.colonChecker(i, message, currentString)){
        if(this.checkLastTwo(message, i)) {
          currentString += `:${message[i+1]}${message[i+2]}`
          return currentString;
        }else {
          currentString = '';
        }
    } else {
      currentString = '';
    }
  }
  }
>>>>>>> add text parsing algorithim
  handleMenuSelect(val, type, when) {
    const { to, from } = this.state
    if(when === 'to') {
      var newObj = Object.assign({}, to)
      newObj[type.toLowerCase()] = val
      this.setState({ to: newObj })
    } else {
      var newObj = Object.assign({}, from)
      newObj[type.toLowerCase()] = val
      this.setState({ from: newObj })
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log(val + " " + type + " " + when)
    console.log(this.state.to);
    console.log(this.state.from);
  }

  handleSubmit() {
    console.log('wired!');
  }

  render() {
    return (
      <div className="layout">
        <div className="card-panel panels">
          <div className="card-content">
            <h1 className="panel-title">From</h1>
            <div>
              <Calendar handleMenuSelect={this.handleMenuSelect.bind(this)} data={this.state.to}/>
              <Time handleMenuSelect={this.handleMenuSelect.bind(this)} data={this.state.to}/>
            </div>
          </div>
        </div>
        <div className="card-panel panels">
          <div className="card-content">
            <h1 className="panel-title">To</h1>
            <div>
              <Calendar handleMenuSelect={this.handleMenuSelect.bind(this)} data={this.state.from}/>
              <Time handleMenuSelect={this.handleMenuSelect.bind(this)} data={this.state.from}/>
            </div>  
          </div>                         
        </div>
        <div className="editor_container">
          <Editor
            // editorState={editorState}
            toolbarClassName="home-toolbar"
            wrapperClassName="home-wrapper"
            editorClassName="home-editor"
            // onEditorStateChange={this.onEditorStateChange}
          />
        </div>
        <button className="waves-effect waves-light btn" onClick={this.handleSubmit}>SUBMIT MEMO</button>
      </div>
    );
  }
}

export default App;
