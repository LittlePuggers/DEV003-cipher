const cipher = {
  encode: (offset, message) => {
    if (!message || !offset) {
      throw new TypeError("No hay mensaje u offset");
    } else {
      let newString = "";

      for (let i = 0; i < message.length; i++) {
        const char = message[i];
        const charCode = char.charCodeAt(0);
        if (charCode <= 90 && charCode >= 65) {
          const newUpChar = String.fromCharCode(
            ((charCode - 65 + parseInt(offset)) % 26) + 65
          );
          newString += newUpChar;
        } else if (charCode >= 97 && charCode <= 122) {
          const newLoChar = String.fromCharCode(
            ((charCode - 97 + parseInt(offset)) % 26) + 97
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
    //para evitar que sean numeros negativos y se mantenga dentro de 26
    offset = offset % 26;
    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      const charCode = char.charCodeAt(0);
      if (charCode <= 90 && charCode >= 65) {
        //restamos 65 para llevarlo a rango 0-25
        //sumamos 26 para mover el rango y evitar negativos
        //restamos el offset ya con modulo para que solo reste 0-25
        const num = (charCode - 65 - offset + 26) % 26;
        newString = newString + String.fromCharCode(num + 65);
      } else if (charCode <= 122 && charCode >= 97) {
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
