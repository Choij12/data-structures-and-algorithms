'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    let node = new Node(value);
    if(this.head === null) {
      this.head = node;
      return;
    }
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
  }
  insert(value) {
    let node = new Node(value);

    this.head = node;
  }
  includes(value) {

    let currentNode = this.head;
    while(currentNode.next) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
  traverse() {
    let string = '';
    let currentNode = this.head;
    while(currentNode !== null) {
      string += `{${currentNode.value}} -> `;
      currentNode = currentNode.next;
    }
    string += 'null';
    return string;
  }
  append(value) {
    let node = new Node(value);
    if(this.head === null) {
      this.head = node;
      return;
    }
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
  }
  insertBefore(curListVal, Val) {
    let newNode = new Node(Val);
    let currentNode = this.head;
    let prevVal;
    while(currentNode !== null) {
      if (currentNode.value === curListVal) {
        newNode.next = currentNode;
        prevVal.next = newNode;
        return;
      }
      prevVal = currentNode;
      currentNode = currentNode.next;
    }
  }
  insertAfter(curListVal, Val) {
    let newNode = new Node(Val);
    let currentNode = this.head;
    let nextVal;
    while(currentNode !== null) {
      if (currentNode.value === curListVal) {
        nextVal = currentNode.next;
        currentNode.next = newNode;
        newNode.next = nextVal;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  kth(k) {
    let currentNode = this.head;
    for(let i = 1; 1 <= k; i++){
      if (i === k) {
        return currentNode.value;
      } else {
        if(currentNode.next === null) {
          return 'Exception';
        } else {
          currentNode = currentNode.next;
        }
      }
    }
  }
}

let list = new LinkedList();

list.add('jacob');
list.add(3);
list.add('codefellows');
list.add(13);
let kth = list.kth(-1);


console.log(kth);
console.log(JSON.stringify(list));







module.exports = { LinkedList, Node };
