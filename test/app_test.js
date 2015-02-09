'use strict';

var expect = require('chai').expect;
var app = require('../bitmap_reader');

describe('app from bitmap_reader', function() {

    var fs = require('fs');
    var bitmap = fs.readFileSync('./Untitled.bmp');
  
  it('should read input bmp file', function () {
   console.log(bitmap);
   expect(bitmap[0]).to.eql(66);
   });

  describe('changes attributes of Untitled', function () {
    bitmap[0] = bitmap[0] + 1;
    bitmap.copy(bitmap);
    fs.writeFileSync('Newpic.bmp', bitmap);
 

  it('should transform the bitmap', function () {
    expect(bitmap[0]).to.eql(67);
  });

  });

});


      






