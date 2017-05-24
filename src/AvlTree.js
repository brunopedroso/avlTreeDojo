AvlNode = require('./AvlNode');

function AvlTree() {

};

AvlTree.prototype = {
  insert(value) {
    AvlNode.insert(this, 'root', value);
    AvlNode.rotateIfNeeded(this, 'root');
  },
  toJson() {
    if (this.root) {
      return this.root.toJson();
    }
  }
};

module.exports = AvlTree;