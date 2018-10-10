/*
function execute(command) {
  const exec = require('child_process').exec

  exec(command, (err, stdout, stderr) => {
    process.stdout.write(stdout)
  })
}

execute('"cd /media/bird/2AE477A5E4777245/Meteor/OrthancMirror/build/"');
execute('"./Orthanc"');

var exec = require('child-process-promise').exec;
 
exec('echo hello')
    .then(function (result) {
        var stdout = result.stdout;
        var stderr = result.stderr;
        console.log('stdout: ', stdout);
        console.log('stderr: ', stderr);
    })
    .catch(function (err) {
        console.error('ERROR: ', err);
    });*/

    /*var spawn = require('child-process-promise').spawn;
 
spawn("",['./Orthanc'], { capture: [ 'stdout', 'stderr' ]})
    .then(function (result) {
        console.log('[spawn] stdout: ', result.stdout.toString());
    })
    .catch(function (err) {
        console.error('[spawn] stderr: ', err.stderr);
    });
*/

function execute(command) {
  const exec = require('child_process').exec

  exec(command, (err, stdout, stderr) => {
    process.stdout.write(stdout)
  })
}


// var exec = require('child-process-promise').exec;
var exec = require('child_process').exec;

console.log('Starting directory: ' + process.cwd());
try {
  process.chdir('/media/bird/2AE477A5E4777245/Meteor/OrthancMirror/build/');
  console.log('New directory: ' + process.cwd());
  /*exec("./Orthanc")
    .then(function (result) {
        var stdout = result.stdout;
        var stderr = result.stderr;
        console.log('stdout: ', stdout);
        console.log('stderr: ', stderr);
    })
    .catch(function (err) {
        console.error('ERROR: ', err);
    });*/

var cmd = './Orthanc';

exec(cmd, function(error, stdout, stderr) {
  // command output is in stdout
  console.log(error);
  console.log(stdout);
  console.log(stderr);
});


}
catch (err) {
  console.log('chdir: ' + err);
}
