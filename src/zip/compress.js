import fs from 'fs'
import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';

const compress = async () => {
    try {
        const fileToCompress = '../zip/files/fileToCompress.txt';
        const compressFile = '../zip/files/archive.gz';
        const gzip = createGzip();
        const source = fs.createReadStream(fileToCompress);
        const destination = fs.createWriteStream(compressFile);

        await pipeline(source, gzip, destination);
        console.log('Finalize');
        
    } catch(err) {
        console.log(err)
    }
};

await compress();