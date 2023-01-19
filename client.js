const net = require('net');
const { IP, PORT } = require('./constant');
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    // code that does something
    console.log(`Server says`, data);
  });

  conn.on('connect', () => {
    conn.write('Name: Jun');
  });

  return conn;
};
module.exports = connect;
