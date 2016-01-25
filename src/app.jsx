var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var Head = require('./head');
var List = require('./list');
var rootUrl = 'https://luminous-torch-5713.firebaseio.com/';

var App = React.createClass({
  mixins: [ ReactFire ],
  getInitialState: function() {
    return {
      people: {},
      loaded: false
    }
  },
  componentWillMount: function() {
    this.fb = new Firebase(rootUrl + 'people/');
    this.bindAsObject(this.fb, 'people');
    this.fb.on('value', this.handleDataLoaded);
  },
  render: function() {
    return <div className="row panel panel-default">
      <div className="col-md-8 col-md-offset-2">
        <h2 className="text-center">
          Register People:
        </h2>
        <Head peopleStore={this.firebaseRefs.people}/>
        <hr/>
        <div className={"content " + (this.state.loaded ? 'loaded' : '')}>
          <List people={this.state.people}/>
        </div>
      </div>
    </div>
  },
  handleDataLoaded: function(){
    this.setState({loaded: true});
  }
});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));