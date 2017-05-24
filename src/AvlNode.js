function AvlNode(value) {
  this.value = value;
  this.height = 1;
  this.balance = 0;
};

AvlNode.insert = (obj, prop, value) => {
  if (obj[prop]) {
    obj[prop].insert(value);
  } else {
    obj[prop] = new AvlNode(value);
  }
}

AvlNode.prototype = {

  insert(value) {
    this.insertChild(value);
    this.updateHeight();
  },

  insertChild(value) {
    let side = value < this.value ? 'left' : 'right';
    AvlNode.insert(this, side, value);
  },

  updateHeight() {
    let left_height = this.left ? this.left.height : 0;
    let right_height = this.right ? this.right.height : 0;
    this.height = Math.max(left_height, right_height) + 1;
    this.balance = right_height - left_height;
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