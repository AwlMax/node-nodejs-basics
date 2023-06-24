import fs from 'fs'

const dir = '../fs/files/fresh.txt'

const create = async () => {
   
    if (!fs.existsSync(dir)) {

        fs.writeFile('../fs/files/fresh.txt', 'I am fresh and young', function(err) {});
    
    } else {
        console.log('FS operation failed');
    }
};

await create();


///home/fox/Documents/node-nodejs-basics/src/fs/files