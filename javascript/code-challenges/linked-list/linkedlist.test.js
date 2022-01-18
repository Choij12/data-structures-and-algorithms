'use strict';

const { LinkedList, Node } = require('../linkedList.js');
const supertest = require('supertest');


describe('Testing linked list', () => {

  it('Should come back with a traversed string', async () => {

    let list = new LinkedList();
    list.add('test1');
    list.add('test2');
    list.add('test3');
    console.log('************ TEST ************* ',list);
    expect(list).toEqual({'head':{'value':'test1','next':{'value':'test2','next':{'value':'test3','next':null}}}});

  });
});
