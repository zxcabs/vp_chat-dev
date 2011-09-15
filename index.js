var connect = require('connect');

connect.createServer(connect.static(__dirname + '/public', { maxAge: 0 })).listen(5432);
