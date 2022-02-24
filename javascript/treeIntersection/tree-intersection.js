'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let arr = [];
    let preOrder = (node) => {
      arr.push(node.value);
      console.log(node.value);
      if (node.left) {
        preOrder(node.left);
      }
      if (node.right) {
        preOrder(node.right);
      }
    };
    let current = this.root;
    preOrder(current);
    return arr;
  }
}

function treeIntersection(binaryTree1, binaryTree2) {
  let arr1 = binaryTree1.preOrder();
  let arr2 = binaryTree2.preOrder();
  let results = [];
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] === arr2[i]) {
      results[results.length] = arr1[i];
    }
  }
  return results;
}

module.exports = { Node, BinaryTree, treeIntersection, };
