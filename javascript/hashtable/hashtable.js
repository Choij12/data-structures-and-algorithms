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
  append(value) {
    const node = new Node(value);
    if ( !this.head ) {
      this.head = node;
      return;
    }

    let current = this.head;
    while( current.next ) {
      current = current.next;
    }
    current.next = node;
  }

  values() {
    let values = [];
    let current = this.head;
    while(current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

class HashTable {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {

    let sum = 0;
    for (let i = 0; i < key.length; i ++) {
      sum += key.charCodeAt(i);
    }

    return (sum * 599) % this.size;
  }

  set(key, value) {
    let index = this.hash(key);
    let bucket = this.map[index];
    let payload = {
      [key]: value
    };

    if (bucket) {
      bucket.append(payload);
    } else {
      let list = new LinkedList();
      list.append(payload);
      this.map[index] = list;
    }
  }

  contains(key) {
    let index = this.hash(key);
    let bucket = this.map[index];
    if (bucket){
      return true;
    }else{
      return false;
    }
  }

  get(key) {
    let index = this.hash(key);
    let bucket = this.map[index];
    return bucket.head.value[key];
  }
}

let map = new HashTable(1024);
console.log(map.hash('lol'));

map.set('happy', 'sad');
console.log(map.map[201]);
module.exports = HashTable;
