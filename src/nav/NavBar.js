import MapNavBar from './MapNavBar'
import PrinciplesNavBar from './PrinciplesNavBar'
import EventsNavBar from './EventsNavBar'
import React from 'react-native'

export default React.createClass({
  propTypes: {
    navigator: React.PropTypes.object,
    navState: React.PropTypes.object
  },

  render () {
    if (this._isMap()) {
      return <MapNavBar/>
    }

    if (this._isPrinciples()) {
      return <PrinciplesNavBar/>
    }
    
    return <EventsNavBar
      navigator={this.props.navigator}
    />
  },

  _isMap () {
    const currentRoutes = this.props.navigator.getCurrentRoutes()
    return currentRoutes[0].name === 'Map' || currentRoutes[currentRoutes.length - 1].name === 'Map'
  },

  _isPrinciples () {
    const currentRoutes = this.props.navigator.getCurrentRoutes()
    return currentRoutes[0].name === 'Principles' || currentRoutes[currentRoutes.length - 1].name === 'Principles' 
  }
})
