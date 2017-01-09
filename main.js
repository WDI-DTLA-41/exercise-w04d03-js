var utils = require('./utils.js');

var url = '/board?row=a&col=b';

console.log( utils.parseUrl(url)  );

var obj = {
  path: '/gp/search',
  query: {
    sort: 'sales rank',
    ref: 'mobile'
  },
  fragment: 'bottom'
}

console.log( utils.toUrl(obj) );
