var React = require('react');
var ListPeople = require('./list-people');

module.exports = React.createClass({
  render: function() {
    return <div>
      {this.renderList()}
    </div>
  },
  
  renderList: function() {
    if(!this.props.people) {
      return <h4>
        Submit a name to get started.
      </h4>
    } else {
      var children = [];

      for(var key in this.props.people) {
        var human = this.props.people[key];
        human.key = key;

        children.push(
          <ListPeople human={human} key={key}>
          </ListPeople>
        )
      }
      return children;
    }
  }
});