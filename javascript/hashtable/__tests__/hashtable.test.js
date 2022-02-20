'use strict';

let HashTable = require ('../hashtable');
let map = new HashTable(1024);

describe('Tests for Hashtable and its functionalities/methods', () => {

  it('Setting a key/value to your hashtable results in the value being in the data structure', () => {
    map.set('key', 'value');
    expect(map.contains('key')).toEqual(true);

  });


  it('Retrieving based on a key returns the value stored', () => {
    expect(map.get('key')).toStrictEqual('value');
  });


  it('Successfully returns null for a key that does not exist in the hashtable', () => {
    expect(map.contains('fake key')).toStrictEqual(false);
  });


  it('Successfully handle a collision within the hashtable', () => {
    expect(map.set('key', 'second key')).toStrictEqual(undefined);
  });


  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    expect(map.get('key')).toEqual('value');
  });


  it('Successfully hash a key to an in-range value', () => {
    expect(map.hash('new key')).toBeLessThanOrEqual(1024);
  });

});
