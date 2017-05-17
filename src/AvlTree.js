function AvlTree() {

}

AvlTree.prototype = {
  insert: function(val) {
    this.root = {value:val};
  }
}

module.exports = AvlTree;