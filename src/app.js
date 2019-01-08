var validator = require('validator');

var React = require('react');
var ReactDOM = require('react-dom');
 
const template = React.createElement('p', {}, 'testing 123');

ReactDOM.render(template, document.getElementById('app'));