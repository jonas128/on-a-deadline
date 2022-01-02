function checkKey(key) {
  return key >= '0' && key <= '9';
}

function box1() {
  // Get the checkbox
  var checkBox = document.getElementById('myCheck');
  // Get the output text
  var text = document.getElementById('text');

  // If the checkbox is checked
  if (checkBox.checked == true) {
    document.body.style.backgroundColor = '#FFB6C1';
    text.style.display = 'block';
  } else {
    text.style.display = 'none';
  }
}

function box2() {
  // Get the checkbox
  var checkBox = document.getElementById('myCheck2');
  // Get the output text
  var text = document.getElementById('text2');

  // If the checkbox is checked
  if (checkBox.checked == true) {
    document.body.style.backgroundColor = '#FF1493';
    text.style.display = 'block';
  } else {
    text.style.display = 'none';
  }
}

function box3() {
  // Get the checkbox
  var checkBox = document.getElementById('myCheck3');
  // Get the output text
  var text = document.getElementById('text3');

  // If the checkbox is checked
  if (checkBox.checked == true) {
    document.body.style.backgroundColor = '#AA0000';
    text.style.display = 'block';
  } else {
    text.style.display = 'none';
  }
}
