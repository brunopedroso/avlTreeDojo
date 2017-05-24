function AvlNode(value) {
  this.value = value;
  this.height = 1;
};

AvlNode.prototype = {

  insert(value) {
    this.insertChild(value);
    this.updateHeight();
  },

  insertChild(value) {
    if (value < this.value) {
      if (this.left) {
        this.left.insert(value);

      } else {
        this.left = new AvlNode(value);

      }

    } else {
      if (this.right) {
        this.right.insert(value);

      } else {
        this.right = new AvlNode(value);

      }

    }
  },

  updateHeight() {
    let left_height = this.left ? this.left.height : 0;
    let right_height = this.right ? this.right.height : 0;
    this.height = Math.max(left_height, right_height) + 1;
  },

  toJson() {
    let json = {
      value: this.value,
    };
    if (this.left) {
      json.left = this.left.toJson();
    }
    if (this.right) {
      json.right = this.right.toJson();
    }
    return json;
  }

};

module.exports = AvlNode;