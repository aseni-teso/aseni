// Изменение картины по клику на ней
var myImage = document.querySelector("img");
myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/first-pic.jpg") {
    myImage.setAttribute("src", "images/second-pic.jpg");
  } else {
    myImage.setAttribute("src", "images/first-pic.jpg");
  }

};

// Персональное приветствие
var myButton = document.querySelector("button");
var myHeading = document.querySelector("#helloUser");
function setUserName() {
  var userName = prompt("Пожалуйста, введите Ваше имя.");
  localStorage.setItem("имя", userName);
  myHeading.textContent = "Приветствую Вас, " + userName + ", на моём сайте!";
}
if (!localStorage.getItem("имя")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("имя");
  myHeading.textContent = "Приветствую Вас, " + storedName + ", на моём сайте!";
}
myButton.onclick = function () {
  setUserName();
};
