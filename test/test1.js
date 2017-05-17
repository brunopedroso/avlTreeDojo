var expect = require('chai').expect;
var AvlTree = require('../src/AvlTree');

describe('AvlTree', function() {

  var tree;

  beforeEach(function() {
    tree = new AvlTree();
  });

  describe('#insert()', function() {

    it('initiates empty', function() {
      expect(tree.root).to.equal(undefined);
    });


    it('should insert the first node', function() {

      tree.insert(1)
      expect(tree.root.value).to.equal(1);

    });
  });

});