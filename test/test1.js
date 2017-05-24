let { expect } = require('chai');
let AvlTree = require('../src/AvlTree');

describe('AvlTree', () => {

  let tree;

  beforeEach(() => {
    tree = new AvlTree();
  });

  describe('#insert()', () => {

    describe('without rotation', () => {

      it('initiates empty', () => {
        expect(tree.toJson()).to.equal(undefined);
      });

      it('should insert the first node', () => {
        tree.insert(1)
        expect(tree.toJson()).to.eql({value: 1});
      });

      it('should insert the bigger node to the right', () => {
        tree.insert(1)
        tree.insert(2)
        expect(tree.toJson()).to.eql({
          value: 1,
          right: {
            value: 2
          }
        });
      });

      it('should insert the smaller node to the left', () => {
        tree.insert(2)
        tree.insert(1)
        expect(tree.toJson()).to.eql({
          value: 2,
          left: {
            value: 1
          }
        });
      });

      it('should insert one children on each side (no rotation)', () => {
        tree.insert(2)
        tree.insert(1)
        tree.insert(3)
        expect(tree.toJson()).to.eql({
          value: 2,
          left: {
            value: 1
          },
          right: {
            value: 3
          }
        });
      });

      it('should insert one grandchild to the right (no rotation)', () => {
        tree.insert(2)
        tree.insert(1) // this is to skip rotation
        tree.insert(3)
        tree.insert(4) // grandchild
        expect(tree.toJson()).to.eql({
          value: 2,
          left: {
            value: 1
          },
          right: {
            value: 3,
            right: {
              value: 4
            }
          }
        });
      });

      it('should insert one grandchild to the left (no rotation)', () => {
        tree.insert(3)
        tree.insert(4) // this is to skip rotation
        tree.insert(2)
        tree.insert(1) // grandchild
        expect(tree.toJson()).to.eql({
          value: 3,
          left: {
            value: 2,
            left: {
              value: 1
            }
          },
          right: {
            value: 4,
          }
        });
      });

    });

    describe('node height and balance', () => {

      it('equals 1 when there are no children', () => {
        tree.insert(1)
        expect(tree.root.height).to.eql(1);
        expect(tree.root.balance).to.eql(0);
      });

      it('equals 2 when there are one child right', () => {
        tree.insert(1)
        tree.insert(2)
        expect(tree.root.height).to.eql(2);
        expect(tree.root.balance).to.eql(1);
      });

      it('equals 2 when there are one child left', () => {
        tree.insert(2)
        tree.insert(1)
        expect(tree.root.height).to.eql(2);
        expect(tree.root.balance).to.eql(-1);
      });

    });

    describe('rotation', () => {

      it('should rotate right', () => {
        tree.insert(3)
        tree.insert(2)
        tree.insert(1)

        expect(tree.root.value).to.eql(2)
        expect(tree.root.height).to.eql(2)
        expect(tree.root.balance).to.eql(0)

        expect(tree.root.left.value).to.eql(1)
        expect(tree.root.left.height).to.eql(1)
        expect(tree.root.left.balance).to.eql(0)

        expect(tree.root.right.value).to.eql(3)
        expect(tree.root.right.height).to.eql(1)
        expect(tree.root.right.balance).to.eql(0)
      });

      it('should rotate left', () => {
        tree.insert(1)
        tree.insert(2)
        tree.insert(3)

        expect(tree.root.value).to.eql(2)
        expect(tree.root.height).to.eql(2)
        expect(tree.root.balance).to.eql(0)

        expect(tree.root.left.value).to.eql(1)
        expect(tree.root.left.height).to.eql(1)
        expect(tree.root.left.balance).to.eql(0)

        expect(tree.root.right.value).to.eql(3)
        expect(tree.root.right.height).to.eql(1)
        expect(tree.root.right.balance).to.eql(0)
      });

    });



  });

});