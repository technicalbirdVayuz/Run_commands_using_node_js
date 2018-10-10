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

/*function execute(command) {
  const exec = require('child_process').exec

  exec(command, (err, stdout, stderr) => {
    process.stdout.write(stdout)
  })
}*/

/******************************************* *******************/

/*

var exec = require('child-process-promise').exec;
// var exec = require('child_process').exec;

console.log('Starting directory: ' + process.cwd());
try {
	  process.chdir('/root/OrthancBuild2/');
	  console.log('New directory: ' + process.cwd());
	 var cmd = 'screen';
	
	exec('screen')
    .then(function (result) {
        var stdout = result.stdout;
        var stderr = result.stderr;
        console.log('stdout: ', stdout);
    	
    	var cmd = './Orthanc Configuration.json';
		
		exec(cmd)
	    .then(function (result) {
	        var stdout = result.stdout;
	        var stderr = result.stderr;
	        console.log('stdout: ', stdout);
	        console.log('stderr: ', stderr);
	    })
	    .catch(function (err) {
	        console.error('ERROR: ', err);
	    });

    })
    .catch(function (err) {
        console.error('ERROR: ', err);
    });

	
}
catch (err) {
  console.log('chdir: ' + err);
}
*/

var exec = require('child-process-promise').exec;
exec("pidof Orthanc")
	    .then(function (result) {
	        var stdout = result.stdout;
	        var stderr = result.stderr;
	        if(stdout!="" || stdout!= undefined){	
					exec("kill -9 " +stdout)
					    .then(function (result) {
					    
					    	try {
							process.chdir('/root/OrthancBuild2/');
							console.log('New directory: ' + process.cwd());
											    	
						    	var cmd = './Orthanc Configuration.json';
								
								exec(cmd)
							    .then(function (result) {
							        var stdout = result.stdout;
							        var stderr = result.stderr;
							        console.log('stdout: ', stdout);
							        console.log('stderr: ', stderr);
							    })
							    .catch(function (err) {
							        console.error('ERROR: ', err);
							    });

							}
								catch (err) {
									console.log('chdir: ' + err);
								}
					    })
					    .catch(function (err) {
					        console.error('ERROR: ', err);
					    });
	        }
	    })
	    .catch(function (err) {
	        console.error('ERROR: ', err);
	    });
