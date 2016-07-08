var ncp = require('ncp').ncp;

ncp.limit = 16;

ncp('./src/images/', 'C:/www_root/finance/images/',  function (err) {
 if (err) {
 	console.log(err);
   return console.error(err);
 }
});

ncp('./dist/', 'C:/www_root/finance/',  function (err) {
 if (err) {
 	console.log(err);
   return console.error(err);
 }
});
console.log('done!');
