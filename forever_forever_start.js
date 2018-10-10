var exec = require('child-process-promise').exec;
exec("forever start command_executor.js")
	    .then(function (result) {
	        console.log("Server started");
	    })
	    .catch(function (err) {
	        console.error('ERROR: ', err);
	        console.error("STARTING");
	    	start_orthanc_server();
});
