function Node (name) {
  this.name = name

  this.leftParent = null
  this.rightParent = null
}

Node.prototype.setLeftParent = function (parent) {
  this.leftParent = parent
}

Node.prototype.setRightParent = function (parent) {
  this.rightParent = parent
}

export default Node
