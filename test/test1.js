let { expect } = require('chai');
let AvlTree = require('../src/AvlTree');

describe('AvlTree', () => {

  let tree;

  beforeEach(() => {
    tree = new AvlTree();
  });

  describe('#insert()', () => {

    it('initiates empty', () => {
      expect(tree.root).to.equal(undefined);
    });

    it('should insert the first node', () => {

      tree.insert(1)
      expect(tree.root.value).to.equal(1);

    });
  });

});