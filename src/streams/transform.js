import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const transform = async () => {
    try {
        process.stdout.write('Enter text or type "exit" to exit the program:\n');

        const reversedStream = new Transform();
        const input = process.stdin;
        const output = process.stdout;

        reversedStream._transform = (chunk, _, callback) => {  
            const entry = chunk.toString();
            if (entry.trim() == 'exit') {
              process.exit();
            }
            const reversedChunk = chunk.toString().split('').reverse().join('') + '\n';
            callback(null, reversedChunk);
          }
          await pipeline(input, reversedStream, output);

    } catch(err) {
        console.log(err)
    }
};

await transform();