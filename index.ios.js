/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var RootView = require('./src/RootView');

var pocketguide = React.createClass({
  render: function() {
    return (
      <RootView/>
    );
  }
});

AppRegistry.registerComponent('pocketguide', () => pocketguide);
