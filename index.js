// let {PythonShell} = require('python-shell')
// PythonShell.run('app.py',null,function(err,results){
//     console.log(results)
//     console.log('python script finished')
// })
// above one not working
let {PythonShell} = require('python-shell')
PythonShell.run('app.py', null).then(messages=>{
    console.log(messages)
  console.log('finished');
});