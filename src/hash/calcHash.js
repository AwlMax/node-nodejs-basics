import crypto, { createHash } from 'crypto'
import fs from 'fs'

const dir = '../hash/files/fileToCalculateHashFor.txt'

const calculateHash = async () => {
    try {
        const buff = fs.readFileSync(dir)
        const hash = createHash('sha256').update(buff).digest('hex')
        console.log(hash);
    } catch(err) {
        console.log(err)
    }
};

await calculateHash();