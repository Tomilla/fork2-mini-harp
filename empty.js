var connect = require('connect');
var app = connect();

console.log( "starting http servir on http://localhost:4000");
//connect();
//app.use(connect.logger());
app.listen(4000);
