import Node from './Node.js'
import viva from 'vivagraphjs/dist/vivagraph.js'

function Graph () {
  this.graph = []
  this.viva = viva.Graph.graph()
}

Graph.prototype.addNode = function (name) {
  for (let item of this.graph) {
    if (item.name === name) {
      return item
    }
  }
  let node = new Node(name)
  this.viva.addNode(name, {'name': name})

  this.graph.push(node)
  return node
}

Graph.prototype.linkLeftParent = function (parent, child) {
  this.viva.addLink(parent.name, child.name)
  this.graph.forEach(node => {
    if (node.name === parent.name) {
      parent = node
    } else if (node.name === child.name) {
      child = node
    }
  })

  child.setLeftParent(parent)
  return this
}

Graph.prototype.linkRightParent = function (parent, child) {
  this.viva.addLink(parent.name, child.name)
  this.graph.forEach(node => {
    if (node.name === parent.name) {
      parent = node
    } else if (node.name === child.name) {
      child = node
    }
  })

  child.setRightParent(parent)
  return this
}

Graph.prototype.render = function () {
  const layout = viva.Graph.Layout.forceDirected(this.viva, {
    springLength: 10,
    springCoeff: 0.0005,
    dragCoeff: 0.02,
    gravity: -1.2
  })

  const graphics = viva.Graph.View.svgGraphics()

  graphics.node(function (node) {
    // The function is called every time renderer needs a ui to display node
    return viva.Graph.svg('text')
      .text(node.data.name)
  })
    .placeNode(function (nodeUI, pos) {
      // Shift image to let links go to the center:
      nodeUI.attr('x', pos.x).attr('y', pos.y)
    })

  const renderer = viva.Graph.View.renderer(this.viva, {
    container: document.getElementById('graphDiv'),
    graphics: graphics,
    layout: layout
  })

  renderer.run()
}

Graph.prototype.getGraph = function () {
  return this.graph
}

export default Graph
