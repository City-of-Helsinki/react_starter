
React = require 'react'

lodash = require 'lodash'
_ = lodash


VizBase = React.createClass
  render: ->
    data = [[i for i in 1..5] for j in 1..4] ->
      _.range 6
    <div>{<Box dataset={piece}> for piece in data}</div>


Box = React.createClass
  render: ->
    <div>{<span>{item}</item> for item in this.props.piece}</div>


Main = ->
  app = document.createElement 'div'
  document.body.appendChild(app);
  React.render <div><VizBase /></div>, app


module.exports =
    VizBase: VizBase
