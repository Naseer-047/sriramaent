const HTMLtoJSX = require('html-to-jsx');
const converter = new HTMLtoJSX({ createClass: false });
console.log(converter.convert('<div class="test">Hello</div>'));
