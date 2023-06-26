const fse = require('fs-extra');
const fe = require('fs');
const path = require('path');
const topDir = __dirname;
fse.emptyDirSync(path.join(topDir, 'public', 'tinymce'));
fse.copySync(path.join(topDir, 'node_modules', 'tinymce'), path.join(topDir, 'public', 'tinymce'), {
  overwrite: true,
  // Only copy *.min.{css,js} file
  filter: (file) =>
    fe.lstatSync(file).isDirectory() ||
    file.endsWith('.min.js') ||
    file.endsWith('.min.css') ||
    file.endsWith('en.js'),
});
