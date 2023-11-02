const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/gsd.png") {
    myImage.setAttribute("src", "images/gsd2.png");
  } else {
    myImage.setAttribute("src", "images/gsd.png");
  }
};

/**
 * Button Event
 */
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

/**
 * After page loads
 */
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `This dog is cool, ${storedName}`;
}

/**
 * Button clicked
 */
myButton.onclick = () => {
  setUserName();
};

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `This dog is cool, ${myName}`;
  }
}
