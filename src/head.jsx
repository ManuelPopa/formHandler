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
            <th>First name</th>
            <th>Last name</th>
        </tr>
        <tr>          
          <td><input value={this.state.firstname} onChange={this.handleFirstName} type="text" /></td>
          <td><input value={this.state.name} onChange={this.handleName} type="text" /></td>
        </tr>        
      </table>
      <span className="input-group-btn">
        <button onClick={this.handleClick} className="btn btn-default" type="button">
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
  handleClick: function() {
    this.props.peopleStore.push({
      name: this.state.name,
      firstname: this.state.firstname,
      edit: false
    });

    this.setState({name: ''});
    this.setState({firstname: ''});
  }
});
