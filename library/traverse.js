'use strict';

const fs = require('fs');
const path = require('path');

const folderTraverse = function (filePath, handler) {
  fs.readdirSync(filePath).forEach(function (file) {
    let file = path.join(filePath, file);
    if (fs.statSync(file).isDirectory()) {
      exports.travel(file, handler);
    } else {
      handler(file);
    }
  });
};

export default folderTraverse;
