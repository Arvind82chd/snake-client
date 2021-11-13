// setup interface to handle user input from stdin

const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput);
    return stdin;
    
    
  };

let connection;

const setupInput = (conn) => {
  connection = conn;
};

const handleUserInput = function () {
    process.stdin.on('data', (key) => {
        process.stdout.write('.');
      });
        if (key === '\u0003') {
            process.exit();
        }
        if (key === 'w') {
          console.log("Move: up");
            conn.on('connect', () => {
              conn.write("Move: up");
            });
        }
        if (key === 's') {
          console.log("Move: down");
            conn.on('connect', () => {
              conn.write("Move: down");
            });
        };
        if (key === 'a') {
          console.log("Move: left");
            conn.on('connect', () => {
              conn.write("Move: left");
            });
        };
        if (key === 'd') {
          console.log("Move: right");
            conn.on('connect', () => {
              conn.write("Move: right");
            });
        };
      console.log('after callback');
    // your code here
};
  
module.exports = {setupInput}