import fs from 'fs'
import { createUnzip } from 'zlib';
import { pipeline } from 'stream/promises';

const decompress = async () => {
    try {
        const fileToDecompress = '../zip/files/fileToCompress.txt';
        const compressedFile = '../zip/files/archive.gz';
        const unzip = createUnzip();
        const source = fs.createReadStream(compressedFile);
        const destination = fs.createWriteStream(fileToDecompress);

        await pipeline(source, unzip, destination);
        console.log('Finalize');
        
    } catch(err) {
        console.log(err)
    }
};

await decompress();