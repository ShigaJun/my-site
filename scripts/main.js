const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/my-icon.jpg") {
    myImage.setAttribute("src", "images/my-icon2.jpg");
  } else {
    myImage.setAttribute("src", "images/my-icon.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("p");

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `${storedName}さん、私のサイトへようこそ！`;
}

myButton.onclick = () => {
    setUserName();
};

function setUserName() {
    const myName = prompt("あなたの名前を入力してください。");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `はじめまして、${myName} さん！`;
    }
}
  