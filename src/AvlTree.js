AvlNode = require('./AvlNode');

function AvlTree() {

};

function rotateRight(parent, prop) {
  let newRoot = parent[prop].left;

  parent[prop].left = undefined;
  parent[prop].updateHeight()

  newRoot.right = parent[prop];
  newRoot.updateHeight()

  parent[prop] = newRoot;
}

AvlTree.prototype = {
  insert(value) {
    AvlNode.insert(this, 'root', value);

    if (this.root.balance < -1) {
      rotateRight(this, 'root');
    }

  },
  toJson() {
    if (this.root) {
      return this.root.toJson();
    }
  }
};

module.exports = AvlTree;