import fs from 'fs'

const write = async () => {
    try {
       
        const fileToWrite = '../streams/files/fileToWrite.txt'
    
        process.stdout.write('Enter text or type "exit" to quit:\n');
    
        const writeableStream = fs.createWriteStream(fileToWrite);
    
        process.stdin.on('data', (input) => {
          const entry = input.toString();
          if (entry.trim() == 'exit') {
            process.exit();
          } else {
            writeableStream.write(input.toString());
          }
        });
      } catch(err) {
        console.error(err);
      }
};

await write();