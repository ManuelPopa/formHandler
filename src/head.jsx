var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      name: '',
      firstname: ''
    }
  },
  render: function() {
    return <div className="input-group">
      <table className="form-control">
        <tr>
            <th>First name </th>
            <th>Last name </th>
        </tr>
        <tr>          
          <td><input value={this.state.firstname} type="text" required="required" onChange={this.handleFirstName}/></td>
          <td><input value={this.state.name} type="text" required="required" onChange={this.handleName}/></td>
        </tr>        
      </table>
      <span className="input-group-btn">
        <button className="btn btn-default" type="button" onClick={this.handleClick}>
          Submit Name
        </button>
      </span>
    </div>
  },
  
  handleName: function(event) {    
    this.setState({name: event.target.value});
  },
  handleFirstName: function(event) {
    this.setState({firstname: event.target.value});
  },
  handleClick: function(e) {
    var regex=/^[a-zA-Z\s]{3,20}$/;    
    if (regex.test(this.state.name)&&regex.test(this.state.firstname)){
      this.props.peopleStore.push({
      name: this.state.name,
      firstname: this.state.firstname,
      edit: false
    });
    this.setState({name: ''});
    this.setState({firstname: ''});
    } else {
      e.preventDefault();
      return alert("Please insert valid Name and First Name, must be 2 to 20 characters long")
    }    
  }
});
