# Vigenère Cipher
The Vigenère cipher is a classic cipher originally developed by Italian cryptographer Giovan Battista Bellaso and published in 1553. It is named after a later French cryptographer Blaise de Vigenère, who had developed a stronger autokey cipher (a cipher that incorporates the message of the text into the key).

## Instalation
- npm install
- npm link

## Usage
### Encoding
Encode and overwrite file
- vigenere encode &lt;file> &lt;password>

Encode file on another one
- vigenere encode &lt;file> &lt;password> -t &lt;new-file>
  
Both cases will print a key between angle brackets <> witch is necessary for decoding. Copy and save it, no refunds.
  
### Decoding
Decode and overwrite file
- vigenere decode &lt;file> &lt;password> &lt;key>
  
Decode file on another one
- vigenere decode &lt;file> &lt;password> &lt;key> -t &lt;new-file>