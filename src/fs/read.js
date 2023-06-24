import fs from 'fs'

const dir = '../fs/files/fileToRead.txt'

const read = async () => {
    fs.readFile(dir, 'utf-8', (err, data) => {
        if (err) {
            console.log('FS operation failed ');
        } else {
            console.log(data)
        }
    })
};

await read();