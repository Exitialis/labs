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

Node.prototype.getLeftParent = () => {
  return this.leftParent
}

Node.prototype.getRightParent = () => {
  return this.rightParent
}

export default Node
