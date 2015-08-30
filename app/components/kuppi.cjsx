
React = require 'react'

Kuppi = React.createClass
  render: ->
    <div>Ota kuppia, {this.props.kuppia}</div>

Lautanen = React.createClass
  render: ->
    <div>Ota lautanen</div>

module.exports =
    Kuppi: Kuppi
    Lautanen: Lautanen
