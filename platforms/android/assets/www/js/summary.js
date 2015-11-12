function summary_display_sound() {
  ez.hide('summary-img');
  ez.hide('summary-filler');
  ez.hide('summary-p');
  ez.hide('summary-video');
  ez.hide('transitionScreen');

  ez.show('summary-audio');

  ez.get_ele('summary-audio').src = "file:///storage/emulated/0/" + selectedproject + "/" + summary_files[summary_index];
}

function summary_display_text() {
  file.summary_Txt(selectedproject + "/" + summary_files[summary_index]);
  ez.get_ele('summary-audio').pause();
  ez.hide('summary-audio');
  ez.hide('summary-filler');
  ez.hide('summary-img');
  ez.hide('summary-video');
  ez.hide('transitionScreen');

  ez.show('summary-p');
}

function summary_display_img() {
  ez.get_ele('summary-audio').pause();
  ez.hide('summary-p');
  ez.hide('summary-audio');
  ez.hide('summary-video');
  ez.hide('transitionScreen');

  ez.show('summary-img');

  var img = ez.get_ele('summary-img');
  img.setAttribute("src", "file:///storage/emulated/0/" + selectedproject + "/" + summary_files[summary_index]);
  img.setAttribute("style","position: relative; top: 50%; -webkit-transform: translateY(-50%); -ms-transform: translate(-50%); transform: translateY(-50%);");
}

function summary_display_video() {
  ez.get_ele('summary-audio').pause();
  ez.hide('summary-p');
  ez.hide('summary-audio');
  ez.hide('summary-img');
  ez.hide('transitionScreen');

  ez.show('summary-video');

  var vid = ez.get_ele('summary-video');
  vid.setAttribute('src', "file:///storage/emulated/0/" + selectedproject + "/" + summary_files[summary_index]);
  vid.setAttribute("style","position: absolute; top: 50%; -webkit-transform: translateY(-50%); -ms-transform: translate(-50%); transform: translateY(-50%);");
}

function isTransition() {
    if (summary_files[summary_index].indexOf('empathy') > -1) {
        prevstep = currstep;
        currstep = 'empathy';
        if (currstep != prevstep) {
            return true;
        }
    } else if (summary_files[summary_index].indexOf('define') > -1) {
        prevstep = currstep;
        currstep = 'define';
        if (currstep != prevstep) {
            return true;
        }
    } else if (summary_files[summary_index].indexOf('ideate') > -1) {
        prevstep = currstep;
        currstep = 'ideate';
        if (currstep != prevstep) {
            return true;
        }
    } else if (summary_files[summary_index].indexOf('prototype') > -1) {
        prevstep = currstep;
        currstep = 'prototype';
        if (currstep != prevstep) {
            return true;
        }
    } else if (summary_files[summary_index].indexOf('test') > -1) {
        prevstep = currstep;
        currstep = 'test';
        if (currstep != prevstep) {
            return true;
        }
    }
    return false;
}

function transitionScreen() {
  summary_index--;
  ez.hide('summary-audio');
  ez.hide('summary-p');
  ez.hide('summary-img');
  ez.hide('summary-video');

  ez.show('transitionScreen');
  ez.get_ele('transitionImg').src = 'img/' + currstep + '.png';
  switch (currstep) {
    case 'empathy':
      ez.get_ele('transitionName').textContent = '1. Empathy';
      break;
    case 'define':
      ez.get_ele('transitionName').textContent = '2. Define';
      break;
    case 'ideate':
      ez.get_ele('transitionName').textContent = '3. Ideate';
      break;
    case 'prototype':
      ez.get_ele('transitionName').textContent = '4. Prototype';
      break;
    default:
      ez.get_ele('transitionName').textContent = '5. Test';
      break;
  }
}

function summary_swipe(element_id, d) {
  if (d == 'l') {
    summary_index++;
    if (summary_index == summary_files.length) {
      ez.hide('summary');
      ez.show('startup');
      selectedproject = '';
      summary_files = [];
      summary_index = 0;
      file_contents = '';
    } else if (isTransition()) {
      transitionScreen();
    } else {
      var file_extension = summary_files[summary_index].substr(summary_files[summary_index].length - 4);
      if (file_extension == '.jpg' || file_extension == '.png') {
        summary_display_img();
      } else if (file_extension == '.txt') {
        summary_display_text();
      } else if (file_extension == '.wav' || file_extension == '.mp3' || file_extension == '.ogg') {
        summary_display_sound();
      } else if (file_extension == '.mp4') {
        summary_display_video();
      }
    }
  } else if (d == 'r') {
    if (summary_index != 0) {
      summary_index--;
      var file_extension = summary_files[summary_index].substr(summary_files[summary_index].length - 4);
      if (file_extension == '.jpg' || file_extension == '.png') {
        summary_display_img();
      } else if (file_extension == '.txt') {
        summary_display_text();
      } else if (file_extension == '.wav' || file_extension == '.mp3' || file_extension == '.ogg') {
        summary_display_sound();
      } else if (file_extension == '.mp4') {
        summary_display_video();
      }
    }
  }
}

swipe.addL('summary', summary_swipe);
