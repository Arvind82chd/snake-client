// setup interface to handle user input from stdin

const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput);
    return stdin;
    
    
  };

  const handleUserInput = function () {
    process.stdin.on('data', (key) => {
        process.stdout.write('.');
      });
        if (key === '\u0003') {
            process.exit();
        }
        if (key === 'w') {
            stdin.on('connect', () => {
                setInterval(() => {
                    conn.write("Move: up");
                  }, 50);
               
            });
        }
        if (key === 's') {
            conn.on('connect', () => {
                setInterval(() => {
                    conn.write("Move: down");
                  }, 50);

                });
        }
        if (key === 'a') {
            conn.on('connect', () => {
                setInterval(() => {
                    conn.write("Move: left");
                  }, 50);
                });
        }
        if (key === 'd') {
            conn.on('connect', () => {
                setInterval(() => {
                    conn.write("Move: right");
                  }, 50);

                });
        }

      console.log('after callback');
    // your code here
  };
  module.exports = {setupInput}