import fs from 'fs'

const dir = '../fs/files/'

const list = async () => {
    if (fs.existsSync(dir)) {
        fs.readdir(dir, (err, files) => {
            files.forEach(file => {
                console.log(file)
            });
        });
    } else {
        console.log('FS operation failed ');
    }
};

await list();