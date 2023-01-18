const net = require('net');
const PORT = 50541;
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: PORT,
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    // code that does something
    console.log('Client is connected to me');
  });

  return conn;
};

console.log('Connecting ...');
connect();
