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
