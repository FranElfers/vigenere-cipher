const { OMITTEDCHARS } = require('./utils')

function VigenèreCipher(key, abc) {
  abc = abc.split('')
  abc = [...abc, ...OMITTEDCHARS]

  const process = (str,cipher) => {
    while (key.length < str.length) key += key
    for (let i = 0; i < str.length; i++) {
      let dis = abc.indexOf(key[i])
      let letterI = abc.indexOf(str[i])
      let jump
      
      if (cipher) {
        /* Encode */
        jump = letterI + dis
        jump = jump >= abc.length ? jump - abc.length : jump
      } else {
        /* Decode */
        jump = letterI - dis
        jump = jump < 0 ? jump + abc.length : jump
      }
      
      if (letterI >= 0) str[i] = abc[jump]
    }
    // console.log(abc)
    return str
  }
  
  this.encode = str => process(str.split(''), true).join('')
  this.decode = str => process(str.split(''), false).join('')
}

module.exports = VigenèreCipher