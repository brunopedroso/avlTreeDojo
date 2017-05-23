AvlNode = require('./AvlNode');

function AvlTree() {

};

AvlTree.prototype = {
  insert(value) {
    if (!this.root) {
      this.root = new AvlNode(value);
    } else {
      this.root.insert(value);
    }
  },
  toJson() {
    if (this.root) {
      return this.root.toJson();
    }
  }
};

module.exports = AvlTree;