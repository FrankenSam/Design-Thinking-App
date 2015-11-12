var file = {
    createDir: function(dirname){
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0,
                function(fileSys) {
                    fileSys.root.getDirectory(dirname, {create: true, exclusive: false},
                        function(directory) {
                            console.log("Directory has been created");
                        }, this.createError);
                }, this.createError);
    },
    createError: function(error){
           alert(error.code);
    },
    getFiles: function(dirname) {
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, this.createError);
        function onFileSystemSuccess(fileSystem) {
            fileSystem.root.getDirectory(dirname, {create: false, exclusive: false}, getDirSuccess, this.createError);
        }
        function getDirSuccess(dirEntry) {
            // Get a directory reader
            var directoryReader = dirEntry.createReader();

            // Get a list of all the entries in the directory
            directoryReader.readEntries(readerSuccess,this.createError);
        }
        function readerSuccess(entries) {
              if (entries.length == 0) {
                ez.show('startup');
                ez.hide('summary-p');
                ez.hide('summary-img');
                ez.hide('summary');
                selectedproject = '';
                summary_files = [];
              }
            entries.sort(file.entryCompare);
            for (var i = 0; i < entries.length; i++) {
              summary_files[i] = entries[i].name;
            }
            summary_index = 0;
            var file_extension = summary_files[summary_index].substr(summary_files[summary_index].length - 4);

            isTransition();
            transitionScreen();
            
            /*
            if (file_extension == '.jpg' || file_extension == '.png') {
              summary_display_img();
            } else if (file_extension == '.txt') {
              summary_display_text();
            } else if (file_extension == '.wav' || file_extension == '.mp3' || file_extension == '.ogg') {
              summary_display_sound();
            } else if (file_extension == '.mp4') {
              summary_display_video();
            }
            */
        }

    },
    getProjects: function(dirname) {
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, this.createError);
        function onFileSystemSuccess(fileSystem) {
            fileSystem.root.getDirectory(dirname, {create: false, exclusive: false}, getDirSuccess, this.createError);
        }
        function getDirSuccess(dirEntry) {
            // Get a directory reader
            var directoryReader = dirEntry.createReader();

            // Get a list of all the entries in the directory
            directoryReader.readEntries(readerSuccess,this.createError);
        }
        function readerSuccess(entries) {
          var el = document.getElementById('projects_container');
          while( el.hasChildNodes() ){
              el.removeChild(el.lastChild);
          }
            var i = 0;
            entries.sort(file.entryCompare);
            var header = [];
            for (i = 0; i < entries.length; i++) {
                header[i] = document.createElement("div");
                header[i].className = 'projectdiv';
                header[i].textContent = entries[i].name;
                header[i].addEventListener("click",function(event) {
                  var deselect = document.getElementsByClassName('projectdiv');
                  for (var v=0; v < deselect.length; v++) {
                    deselect[v].style.backgroundColor = 'white';
                    deselect[v].style.color = '#848484';
                  }
                    selectedproject = dirname + "/" + this.textContent;
                    this.style.backgroundColor = '#5bc0d8';
                    this.style.color = 'white';
                });
                ez.get_ele('projects_container').appendChild(header[i]);
                console.log(entries[i].name);
            }
        }
    },
    entryCompare: function(a,b) {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
    },
    createFile: function(filename, content) {
      window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);

      function gotFS(fileSystem) {
              fileSystem.root.getFile(filename, {create: true}, gotFileEntry, fail);
          }

          function gotFileEntry(fileEntry) {
              fileEntry.createWriter(gotFileWriter, fail);
          }

          function gotFileWriter(writer) {
              writer.onwrite = function(evt) {
              };
              writer.write(content);

          }

          function fail(error) {
              if(error.code == 1){
                  alert('not found');
              }
              alert(error.code);
          }
    },
    readTxt: function(filename) {
      window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
      function gotFS(fileSystem) {
          fileSystem.root.getFile(filename, null, gotFileEntry, fail);
      }

      function gotFileEntry(fileEntry) {
          fileEntry.file(gotFile, fail);
      }

      function gotFile(file){
          readAsText(file);
      }

      function readAsText(file) {
          var reader = new FileReader();
          var rval;
          reader.onloadend = function(evt) {
              console.log("Read as text");
              console.log(evt.target.result);
              file_contents = evt.target.result;
              done_reading = true;
          };
          reader.readAsText(file);
      }

      function fail(error) {
        alert('error!');
          console.log(error.code);
      }
    },
    summary_Txt: function(filename) {
      window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
      function gotFS(fileSystem) {
          fileSystem.root.getFile(filename, null, gotFileEntry, fail);
      }

      function gotFileEntry(fileEntry) {
          fileEntry.file(gotFile, fail);
      }

      function gotFile(file){
          readAsText(file);
      }

      function readAsText(file) {
          var reader = new FileReader();
          reader.onloadend = function(evt) {
            ez.get_ele('summary-p').textContent = evt.target.result;
          };
          reader.readAsText(file);
      }

      function fail(error) {
        alert('error!');
          console.log(error.code);
      }
    }
}
