const { sync } = require('glob');
const path = require('path');

console.log(path.join(process.cwd(), "src", "articles"));
const result = sync(path.join(process.cwd(), "src", "articles"));

console.log(result);
