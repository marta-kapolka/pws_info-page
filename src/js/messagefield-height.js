const messageWindow = document.querySelector(".form__message--js");
let messageWindowHeight = document.querySelector(".form__message--js")
  .scrollHeight;

function adjustWindowHeight() {
  messageWindow.style.height = "";
  messageWindowHeight = document.querySelector(".form__message--js")
    .scrollHeight;

  messageWindow.style.height = messageWindowHeight + 1 + "px";
  console.log("function fire!");
}

messageWindow.addEventListener("input", adjustWindowHeight);
