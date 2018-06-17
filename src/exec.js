const { spawn } = require('child_process');

function exec(command) {
  const [ program, ...args ] = command.split(' ')
  const childProcess = spawn(program, args)

  return new Promise((resolve, reject) => {

    childProcess.on('close', (code) => {
      return resolve()
    });
  
    childProcess.stdout.on('data', (data) => {
      console.log(data.toString('utf8'))
    })
    
    childProcess.stderr.on('data', (err) => {
      return reject(err.toString('utf8'))
    })

  })
}

module.exports = exec
