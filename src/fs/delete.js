import fs from 'fs'

const dir = '../fs/files/fileToRemove.txt'

const remove = async () => {
    if (fs.existsSync(dir)) {
        fs.unlinkSync(dir)
    } else {
        console.log('FS operation failed')
    }
};

await remove();