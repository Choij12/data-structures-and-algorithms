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
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  values() {
    let values = [];
    let current = this.head;
    while (current) {
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
    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i);
    }

    return (sum * 599) % this.size;
  }

  add(key, value) {
    let index = this.hash(key);
    let bucket = this.map[index];
    let payload = {
      [key]: value,
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
    if (bucket) {
      return true;
    } else {
      return false;
    }
  }


  get(key) {
    let index = this.hash(key);
    let bucket = this.map[index];
    return bucket.head.value[key];
  }
}

function leftJoin(map1, map2) {
  let result = [];
  let tmp = [];
  map1.map.forEach((key) => {
    tmp.push(key.values());
  });
  for (let i = 0; i < tmp.length; i++) {
    result.push(Object.entries(tmp[i][0]));
    if (map2.contains(result[i][0][0])) {
      result[i][0].push(map2.get(result[i][0][0]));
    } else result[i][0].push(null);
  }
  return result.flat();
}

module.exports = { HashTable, leftJoin };

