  // A button will call this function
 //
 function captureVideo() {
    // Launch device video recording application,
    // allowing user to capture up to 1 video clips
    navigator.device.capture.captureVideo(captureSuccess, captureError, {limit: 1});
 }
 
 // Called when capture operation is finished
 //
 function captureSuccess(mediaFiles) {
    var i, len;
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        moveVid(mediaFiles[i]);		
        uploadFile(mediaFiles[i]);
    }
}

function moveVid(file){ 
    window.resolveLocalFileSystemURI(file, resolveOnSuccess2, resOnError2); 
} 

//Callback function when the file system uri has been resolved
function resolveOnSuccess2(entry){ 
    var d = getDateFormat();
    //new file name
    var newFileName = stepName + d + ".mp4";
    var myFolderApp = project_path;

    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSys) {      
    //The folder is created if doesn't exist
    fileSys.root.getDirectory( myFolderApp,
                    {create:true, exclusive: false},
                    function(directory) {
                        entry.moveTo(directory, newFileName,  successMove2, resOnError2);
                    },
                    resOnError2);
                    },
    resOnError2);
}

//Callback function when the file has been moved successfully - inserting the complete path
function successMove2(entry) {
    //Store imagepath in session for future use
    // like to store it in database
    sessionStorage.setItem('imagepath', entry.fullPath);
	alert("Vid Saved 1");
}

function resOnError2(error) {
    alert("Video Save Failed 1");
}





 // Called if something bad happens.
 //
 function captureError(error) {
    var msg = 'An error occurred during capture: ' + error.code;
    navigator.notification.alert(msg, null, 'Uh oh!');
 }


 
// Upload files to server
function uploadFile(mediaFile) {
    var ft = new FileTransfer(),
        path = mediaFile.fullPath,
        name = mediaFile.name;

    ft.upload(path,
        project_path,
        function(result) {
            console.log('Upload success: ' + result.responseCode);
            console.log(result.bytesSent + ' bytes sent');
			alert('Video Copy Success 2');
        },
        function(error) {
            console.log('Error uploading file ' + path + ': ' + error.code);
			alert('Video Copy Failed 2');
        },
        { fileName: name });
}
