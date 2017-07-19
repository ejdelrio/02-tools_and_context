'use strict';

const fp = require('../lib/fp.js');
const expect = require('chai').expect;

let testingArray = [1, 5, 7, 8];
let secondTestArray = [9, 1, 1, 4];

describe('Test for fp module', () => {

  describe('#map', () => {

    it('Should return a new modified array', () => {
      let mappedArray = fp.map(testingArray, (val) => val + 1);
      let secondMappedArray = fp.map(testingArray, (val) => Math.pow(val, 2));
      expect(mappedArray).to.deep.equal([2, 6, 8, 9]);
      expect(secondMappedArray).to.deep.equal([1, 25, 49, 64]);
    });

    it('Should throw an error when invalid arguements are entered', () => {
      expect(fp.map.bind(fp)).to.throw(Error);
      expect(fp.map.bind(fp, [1, 2, 3, 4])).to.throw(Error);
      expect(fp.map.bind(fp, [1, 2, 3], 'not a callback')).to.throw(Error);
      expect(fp.map.bind(fp, 'not an array', (val) => 1 + val)).to.throw(Error);
    });

  });

  describe('#filter', () => {

    it('Should return a new filtered array', () => {
      let filterArray = fp.filter(testingArray, (val) => val <  6);
      let secondFilterArray = fp.filter(testingArray, (val) => val > 5);
      expect(filterArray).to.deep.equal([1, 5]);
      expect(secondFilterArray).to.deep.equal([7, 8]);
    });

    it('Should throw an error when invalid arguements are entered', () => {
      expect(fp.filter.bind(fp)).to.throw(Error);
      expect(fp.filter.bind(fp, [1, 2, 3, 4])).to.throw(Error);
      expect(fp.filter.bind(fp, [1, 2, 3], 'not a callback')).to.throw(Error);
      expect(fp.filter.bind(fp, 'not an array', (val) => 1 + val)).to.throw(Error);
    });
  })

  describe('#reduce', () => {

    it('Should return a reduced array', () => {
      let reduceArray = fp.reduce(testingArray, (count, val) => {
        count += val;
        return count;
      }, 0);
      let secondReduceArray = fp.reduce(testingArray, (count, val) => {
        count.push(val + 1);
        return count;
      }, [1]);
      expect(reduceArray).to.equal(21);
      expect(secondReduceArray).to.deep.equal([1, 2, 6, 8, 9]);
    });

    it('Should throw an error when invalid arguements are entered', () => {
      expect(fp.reduce.bind(fp)).to.throw(Error);
      expect(fp.reduce.bind(fp, 1)).to.throw(Error);
      expect(fp.reduce.bind(fp, [], 1)).to.throw(Error);
      expect(fp.reduce.bind(fp, 'a', (val) => val)).to.throw(Error);
    });
  });

  describe('#concat', () => {

    it('Should return a new concated array', () => {
      expect(fp.concat(testingArray, secondTestArray))
      .to.deep.equal([1, 5, 7, 8, 9, 1, 1, 4]);
    });

    it('Should throw an error when invalid arguements are entered', () => {
      expect(fp.concat.bind(fp)).to.throw(Error);
      expect(fp.concat.bind(fp, [], 'a')).to.throw(Error);
      expect(fp.concat.bind(fp, 'a', [])).to.throw(Error);
    });
  });
  describe('#splice', () => {

    it('Should return a new spliceed array', () => {
      expect(fp.splice(testingArray, 0, 2)).to.deep.equal([1, 5]);
      expect(fp.splice(testingArray, 0, 1, 4, 5, 6, 7)).to.deep.equal([7]);
      expect(testingArray).to.deep.equal([4, 5, 6, 7, 8])
    });

    it('Should throw an error when invalid arguements are entered', () => {
      expect(fp.splice.bind(fp)).to.throw(Error);
      expect(fp.splice.bind(fp, 'a', 1)).to.throw(Error);
      expect(fp.splice.bind(fp, 3, 'a')).to.throw(Error);
    });
  });
});
