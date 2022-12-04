import cipher from "./cipher.js";

//console.log(cipher.encode("AB C,"));
//console.log(cipher.decode("B C!D"));

const message = document.getElementById("mensaje");
const offset = document.getElementById("offset");
const butencode = document.getElementById("bot-enc");
const butdecode = document.getElementById("bot-dec");
const result = document.getElementById("resultado");

butencode.addEventListener("click", () => {
  result.innerText = cipher.encode(offset.value, message.value);
});
butdecode.addEventListener("click", () => {
  result.innerText = cipher.decode(offset.value, message.value);
});
