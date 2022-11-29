const cipher = {
  // Obtener el mensaje y offset(n)
  // Implementar formula (x - 65 + n) % 26 + 65
  // Hacer el return

  //~.charCodeAt() te da el número del código ASCII
  //String.fromCharCode() te da la letra correspondiente del ASCII

  encode: (message, offset) => {
    if (!message) {
      return "";
    } else {
      const string = message.toUpperCase();
      let newString = "";

      for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (char.charCodeAt(0) <= 90 && char.charCodeAt(0) >= 65) {
          const newChar = String.fromCharCode(
            char.charCodeAt(0) - 65 + (parseInt(offset) % 26) + 65
          );
          newString += newChar;
        } else {
          newString += char;
        }
      }
      return newString;
    }
  },
  decode: (message, offset) => {
    if (!message) {
      return "";
    }
    const string = message.toUpperCase();
    let newString = "";

    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (char.charCodeAt(0) <= 90 && char.charCodeAt(0) >= 65) {
        const newChar = String.fromCharCode(
          char.charCodeAt(0) - 65 - (parseInt(offset) % 26) + 65
        );
        newString += newChar;
      } else {
        newString += char;
      }
    }

    return newString;
  },
};
export default cipher;
