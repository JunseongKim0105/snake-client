const net = require('net');
const { setTimeout } = require('timers/promises');
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    // code that does something
    console.log(`Server says`, data);
  });

  conn.on('connect', () => {
    conn.write('Name: Jun');
    setInterval(() => {
      conn.write('Move: up');
    }, 500);
    setInterval(() => {
      conn.write('Move: right');
    }, 1000 / 15);
  });

  return conn;
};
module.exports = connect;
