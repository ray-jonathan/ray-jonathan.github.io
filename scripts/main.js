/* IMAGE CHANGER
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/internet.jpeg') {
      myImage.setAttribute ('src','images/construction.png');
    } else {
      myImage.setAttribute ('src','images/internet.jpeg');
    }
}
*/

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'I\'ll remember that you visited my page, ' + myName + '.';
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello again, ' + storedName + '.';
}
myButton.onclick = function() {
  setUserName();
}
