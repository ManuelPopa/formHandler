var React = require('react');
var Firebase = require('firebase');
var rootUrl = 'https://luminous-torch-5713.firebaseio.com/';

module.exports = React.createClass({
  getInitialState: function() {
    return {
      firstname: this.props.human.firstname,
      name: this.props.human.name,
      edit: this.props.human.edit,
      textChanged: false
    }
  },
  componentWillMount: function() {
    this.fb = new Firebase(rootUrl + 'people/' + this.props.human.key);
  },
  render: function() {
    return <div className="input-group">
      <span className="input-group-addon"> Check to edit 
        <input style={{marginLeft: 5 + 'px'}} type="checkbox" checked={this.state.edit} onChange={this.handleEditableChange}/>
      </span>
      <input type="text" disabled="true" className="form-control" value={this.state.firstname + ' ' + this.state.name}/>
        {this.changesInput()}
      <span className="input-group-btn">
        {this.changesButtons()}
        <button className="btn btn-default" onClick={this.handleDeleteClick}>
          Delete
        </button>
      </span>
    </div>
  },

  changesButtons: function() {
    if(!this.state.textChanged) {
      return null
    } else {
      return [
        <button className="btn btn-default" onClick={this.handleSaveClick}>
          Save
        </button>,
        <button className="btn btn-default" onClick={this.handleUndoClick}>
          Undo
        </button>
      ]
    }
  },
  changesInput: function() {
    if(!this.state.edit) {
      return null
    } else {
      return <div>     
        <input className="form-control" value={this.state.firstname} onChange={this.handleFirstNameChange} type="text"/>   
        <input className="form-control" value={this.state.name} onChange={this.handleNameChange} type="text"/>          
      </div>
    }
  },
  handleNameChange: function(event) {    
    this.setState({
      name: event.target.value,
      textChanged: true
    });
  },
  handleFirstNameChange: function(event) {    
    this.setState({
      firstname: event.target.value,
      textChanged: true
    });
  },
  handleSaveClick: function(e) {
    var regex=/^[a-zA-Z\s]{3,20}$/;

    if (regex.test(this.state.name)&&regex.test(this.state.firstname)){
      this.fb.update({name: this.state.name, firstname: this.state.firstname});
      this.setState({textChanged: false});
    }else {
      e.preventDefault();
      return alert("Please insert valid Name and First Name, must be 2 to 20 characters long")
    }    
  },
  handleUndoClick: function() {
    this.setState({
      name: this.props.human.name,
      firstname: this.props.human.firstname,
      textChanged: false
    });
  },  
  handleEditableChange: function(event) {
    var update = {edit: event.target.checked}
    this.setState(update);
    this.fb.update(update);
  },
  handleDeleteClick: function() {
    this.fb.remove();
  }
});