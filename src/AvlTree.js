function AvlTree() {

}

AvlTree.prototype = {
  insert(value) {
    this.root = { value };
  }
}

module.exports = AvlTree;