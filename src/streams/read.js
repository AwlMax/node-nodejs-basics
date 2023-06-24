import fs from 'fs'

const read = async () => {
    try {
        const fileToRead = '../streams/files/fileToRead.txt'
        const readableStream = await fs.createReadStream(fileToRead);

        readableStream.on('data', (chunk) => {
            process.stdout.write(chunk);
          })
    } catch(err) {
        console.log(err)
    }
};

await read();