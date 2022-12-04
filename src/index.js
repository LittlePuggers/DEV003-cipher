import cipher from "./cipher.js";

const toggle = document.getElementById("toggle");

const message = document.getElementById("mensaje");
const offset = document.getElementById("offset");
const butencode = document.getElementById("bot-enc");
const butdecode = document.getElementById("bot-dec");
const result = document.getElementById("resultado");

if (toggle.checked) {
  console.log("sirve toggle");
  butencode.className = "visible";
  butdecode.className = "hidden";
} else {
  butdecode.className = "visible";
  butencode.className = "hidden";
}

butencode.addEventListener("click", () => {
  result.innerText = cipher.encode(offset.value, message.value);
});
butdecode.addEventListener("click", () => {
  result.innerText = cipher.decode(offset.value, message.value);
});
