const cipher = {
  // Obtener el mensaje y offset(n)
  // Implementar formula (x - 65 + n) % 26 + 65
  // Hacer el return

  //~.charCodeAt() te da el número del código ASCII
  //String.fromCharCode() te da la letra correspondiente del ASCII

  encode: (offset, message) => {
    if (!message || !offset) {
      throw new TypeError("No hay mensaje u offset");
    } else {
      let newString = "";

      for (let i = 0; i < message.length; i++) {
        const char = message[i];
        if (char.charCodeAt(0) <= 90 && char.charCodeAt(0) >= 65) {
          const newUpChar = String.fromCharCode(
            ((char.charCodeAt(0) - 65 + parseInt(offset)) % 26) + 65
          );
          newString += newUpChar;
        } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
          const newLoChar = String.fromCharCode(
            ((char.charCodeAt(0) - 97 + parseInt(offset)) % 26) + 97
          );
          newString += newLoChar;
        } else {
          newString += char;
        }
      }
      return newString;
    }
  },
  decode: (offset, message) => {
    if (!offset || !message) {
      throw new TypeError("No hay mensaje u offset");
    }
    let newString = "";
    offset = offset % 26;
    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      const charCode = char.charCodeAt(0);
      if (charCode <= 90 && charCode >= 65) {
        const num = (charCode - 65 - offset + 26) % 26;
        newString = newString + String.fromCharCode(num + 65);
      } else if (charCode <= 122 && charCode >= 97) {
        offset = offset % 26;
        const num = (charCode - 97 - offset + 26) % 26;
        newString = newString + String.fromCharCode(num + 97);
      } else {
        newString += char;
      }
    }
    return newString;
  },
};
export default cipher;
