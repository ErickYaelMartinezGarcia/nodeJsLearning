import {readFile} from 'node:fs/promises'

const contentFile = await readFile('./txt.js','utf-8')

console.log(contentFile)