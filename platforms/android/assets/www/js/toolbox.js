var toolbox = {
    toolbox_files: function(filename) {
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
			ez.get_ele('toolbox_content').innerHTML = evt.target.result;

          };
          reader.readAsText(file);
		  
      }
	  
      function fail(error) {
        alert('error!');
          console.log(error.code);
      }
    },

	populate_tools: function(){
		var allTool = ez.get_ele("toolbox_content");
		var eachTool = allTool.textContent.split("\n");
			//ez.get_ele('blarg2').innerHTML = "Doop" + eachTool[1];

			var li = [];
			var titleDiv = [];
			var pDiv = [];
			var textDiv = [];
			var img = [];
			var imgDiv = [];
			var currIndex = 0;
            for (var i = 0; i < eachTool.length; i=i+3) {
				if (eachTool[i+2]){
					currIndex = i/3;
					li[currIndex] = document.createElement("li");
					textDiv[currIndex] = document.createElement("div");
					imgDiv[currIndex] = document.createElement("div");
					titleDiv[currIndex] = document.createElement("h2");
					pDiv[currIndex] = document.createElement("p");
					img[currIndex] = document.createElement("img");
					
					titleDiv[currIndex].textContent = eachTool[i];
					pDiv[currIndex].textContent = eachTool[i+1];
					img[currIndex].src = 'img/toolbox.png';
					
					imgDiv[currIndex].appendChild(img[currIndex]);					
					textDiv[currIndex].appendChild(titleDiv[currIndex]);
					textDiv[currIndex].appendChild(pDiv[currIndex]);
					
					imgDiv[currIndex].className = 'toolbox_pic';
					textDiv[currIndex].className = 'toolbox_text_div';
					
					li[currIndex].appendChild(imgDiv[currIndex]);					
					li[currIndex].appendChild(textDiv[currIndex]);
					
					li[currIndex].className = 'toolbox_tool';
					li[currIndex].className += " " + eachTool[i+2];
					ez.get_ele('toolbox-list').appendChild(li[currIndex]);
				}
			}
	}		
	
}