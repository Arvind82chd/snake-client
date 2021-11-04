const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",// IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server.")
    // code that does something when the connection is first established
  });
  
conn.on('connect', () => {
    conn.write("Name:AS");
});


conn.on('connect', () => {
    setInterval(() => {
        conn.write("Move: up");
      }, 50);
   
});

conn.on('connect', () => {
  setInterval(() => {
    conn.write("Say: Hi how are you doing?");
  }, 12000);
});



  conn.on('data', function(message) {
    console.log(`Server says:  ${message}`);
  });

  return conn;
};


module.exports = connect