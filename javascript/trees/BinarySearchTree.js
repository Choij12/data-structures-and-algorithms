'use strict';

const BinaryTree = require('./BinaryTree');
const Node = require('./node');

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
    this.root = null;
  }

  add(val) {
    let newNode = new Node(val);

    if(this.root === null){
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (current) {
      if (val < current.value) {
        if (current.left === null) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else {
        if (current.right === null){
          current.right = newNode;
          break;
        } else {
          current = current.right;
        }
      }
    }
  }

  contains(value) {
    let current = this.root;

    while (current) {
      if (current.value === value) {
        return true;
      }
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
}

module.exports = BinarySearchTree;
