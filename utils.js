// '/board?row=a&col=b'
function parseUrl(url) {
  var obj = {};
  var parts = url.split('?');
  var path = parts[0];
  var queryString = parts[1]; // row=a&col=b
  var queryParams = queryString.split('&');
  // ['row=a', 'col=b']
  var query = {};
  queryParams.forEach(function(keyVal) {
    var parts = keyVal.split('=');
    var key = parts[0];
    var val = parts[1];
    query[key] = val;
  });
  obj.path = path;
  obj.query = query;
  return obj;
}

function toUrl(obj) {
  var url = '';
  url += obj.path;
  var queryString = Object.keys(obj.query).map(function(key) {
    return key + '=' + obj.query[key].replace(/\s/, '%20');
  }).join('&');
  url += queryString;
  url += '#' + obj.fragment;
  return url;
}

module.exports = {
  parseUrl: parseUrl,
  toUrl: toUrl
}
