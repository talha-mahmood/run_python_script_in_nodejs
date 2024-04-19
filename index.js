// let {PythonShell} = require('python-shell')
// PythonShell.run('app.py',null,function(err,results){
//     console.log(results)
//     console.log('python script finished')
// })
// above one not working

let {PythonShell} = require('python-shell')
let options = {
  mode: 'text',
  pythonPath: 'python', // Change this to your Python executable path if necessary
  pythonOptions: ['-u'], // get print results in real-time
  args: ["Islamabad"]
};
PythonShell.run('app.py', options).then(results=>{
    console.log(results)
  console.log('finished');
})  
.catch(err => {
  console.error('Error:', err);
});