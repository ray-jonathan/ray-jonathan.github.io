
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/internet.jpeg') {
      myImage.setAttribute ('src','images/construction.png');
    } else {
      myImage.setAttribute ('src','images/internet.jpeg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'The internet is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'The internet is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
