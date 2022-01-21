#!/usr/bin/env node
const { program } = require("commander");
const { encode, decode } = require("./src/encrypter");

program.version('0.0.1').description('The Vigenère cipher is a classic cipher originally developed by Italian cryptographer Giovan Battista Bellaso and published in 1553. It is named after a later French cryptographer Blaise de Vigenère, who had developed a stronger autokey cipher (a cipher that incorporates the message of the text into the key).');

program.option('-t, --to-file <new-file>', 'Add cheese with optional type');

program.command('encode <file> <password>').action(encode(program))

program.command('decode <file> <password> <dictionary>').action(decode(program))

program.parse(process.argv);