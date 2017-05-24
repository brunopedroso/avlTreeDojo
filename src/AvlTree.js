AvlNode = require('./AvlNode');

function AvlTree() {

};

AvlTree.prototype = {
  insert(value) {
    AvlNode.insert(this, 'root', value);

    if (this.root.balance < -1) {
      AvlNode.rotate(this, 'root', 'right');
    } else if (this.root.balance > 1) {
      AvlNode.rotate(this, 'root', 'left');
    }

  },
  toJson() {
    if (this.root) {
      return this.root.toJson();
    }
  }
};

module.exports = AvlTree;