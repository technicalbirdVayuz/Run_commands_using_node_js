
var express = require('express'),
app = express(),

port = process.env.PORT || 4300;
var fs = require("fs");

app.use(express.static(__dirname + '/public'));

app.get('/', function (request, response){



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
    	
    	var cmd = 'Orthanc ./Configuration.json';
		
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


var exec = require('child-process-promise').exec;
exec("pidof Orthanc")
	    .then(function (result) {
	        var stdout = result.stdout;
	        var stderr = result.stderr;
	        if(stdout!="" || stdout!= undefined){	
					exec("kill -9 " +stdout)
					    .then(function (result) {
					    start_orthanc_server();
					    	
					    })
					    .catch(function (err) {
					        console.error('ERROR: ', err);
					    });
	        }
	    })
	    .catch(function (err) {
	        console.error('ERROR: ', err);
	        console.error("STARTING");
	    	start_orthanc_server();
	    });

function start_orthanc_server(){
					try {
							process.chdir('/root/OrthancBuild2/');
							console.log('New directory: ' + process.cwd());
											    	
						    	var cmd = 'Orthanc ./Configuration.json';
								
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
									console.log('error while starting: ' + err);
							}						
}


});


app.listen(port);
