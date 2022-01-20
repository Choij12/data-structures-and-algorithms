'use strict';

const { LinkedList, Node } = require('../linkedList.js');

const supertest = require('supertest');


describe('Testing kth method of linked list', () => {

  it('Where k is greater than the length of the linked list. Should come back as undefined.', async () => {

    let list = new LinkedList();
    list.add('test1');
    list.add('test2');
    list.add('test3');
    let kth = list.kth(4);
    console.log('test',kth);
    expect(kth).toEqual('Exception');
  });

  it('Where k and the length of the list are the same. Should come back with test3.', async () => {

    let list = new LinkedList();
    list.add('test1');
    list.add('test2');
    list.add('test3');
    let kth = list.kth(3);
    console.log('test',kth);
    expect(kth).toEqual('test3');
  });

  it('Where k is not a positive integer. Should come back as undefined.', async () => {

    let list = new LinkedList();
    list.add('test1');
    list.add('test2');
    list.add('test3');
    let kth = list.kth(-1);
    console.log('test',kth);
    expect(kth).toEqual(undefined);
  });

  it('Where the linked list is of a size 1. Should come back with test1.', async () => {

    let list = new LinkedList();
    list.add('test1');
    let kth = list.kth(1);
    console.log('test',kth);
    expect(kth).toEqual('test1');
  });

  it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list. Should come back as undefined.', async () => {

    let list = new LinkedList();
    list.add('test1');
    list.add('test2');
    list.add('test3');
    let kth = list.kth(2);
    console.log('test',kth);
    expect(kth).toEqual('test2');
  });
});

describe('Testing the zipLists method of linked list', () => {

  it('When both list are of equal lenght', async () => {

    let list = new LinkedList();
    let link1 = { head: { value: 1, next: {value: 3, next: { value: 5, next: null }}}};
    let link2 = { head: { value: 2, next: {value: 4, next: { value: 6, next: null }}}};

    let zippy = list.zipLists(link1, link2);
    console.log('Test',zip);
    expect(zip).toEqual('{1} -> {2} -> {3} -> {4} -> {5} -> {6} -> null');
  });
});
