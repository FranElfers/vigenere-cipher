const { OMITTEDCHARS } = require('./utils');
const VigenèreCipher = require("./vigenere")
const { readFileSync, writeFileSync } = require("fs");

const encode = program => (file, password) => {
  const data = readFileSync(file, { encoding: 'utf-8' })
  
  /** Dictionary creation */
  let dictionary = ''
  for (let i = 0; i < data.length; i++) {
    let letter = data[i]
    if (!dictionary.includes(letter) && !OMITTEDCHARS.includes(letter)) dictionary += letter
  }

  /** Encryption */
  const cipher = new VigenèreCipher(password, dictionary)
  let output = cipher.encode(data)
  
  const newFile = program.opts().toFile
  
  writeFileSync(newFile || file, output)
  
  console.log(`👍 Your dictionary (without <>): <${dictionary}>. Save it in a safe place.`)
  console.log('✅ New encrypted file', newFile || file)
}

const decode = program => (file, password, dictionary) => {
  const data = readFileSync(file, { encoding: 'utf-8' })

  const cipher = new VigenèreCipher(password, dictionary)
  let output = cipher.decode(data)
  
  const newFile = program.opts().toFile;

  writeFileSync(newFile || file, output)

  console.log('✅ De-encrypted file', newFile || file)
}

module.exports = { encode, decode }