import cipher from "./cipher.js";

const toggle = document.getElementById("toggle");
const toggleInput = document.getElementById("toggleinput");

const message = document.getElementById("mensaje");
const offset = document.getElementById("offset");
const butencode = document.getElementById("bot-enc");
const butdecode = document.getElementById("bot-dec");
const result = document.getElementById("resultado");

toggle.addEventListener("click", () => {
  toggleInput.checked = !toggleInput.checked;
  if (toggleInput.checked) {
    console.log("decode hidden");
    butencode.className = "visible";
    butdecode.className = "hidden";
  } else {
    console.log("encode hidden");
    butdecode.className = "visible";
    butencode.className = "hidden";
  }
});

butencode.addEventListener("click", () => {
  result.innerText = cipher.encode(offset.value, message.value);
});
butdecode.addEventListener("click", () => {
  result.innerText = cipher.decode(offset.value, message.value);
});
