'use strict'

var fs = require('fs');
var bitmap = fs.readFileSync('Untitled.bmp');
console.log(bitmap[52], bitmap[53]);

for (var i = 52; i < 1024; i++) {
    bitmap[i] = bitmap[i] + 300;
}

console.log(bitmap[52], bitmap[53]);

bitmap.copy(bitmap);

console.log(bitmap[52], bitmap[53]);

fs.writeFileSync('Newpic.bmp', bitmap);
//console.log(newBitmap)
