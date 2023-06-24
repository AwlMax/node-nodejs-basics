import fs from 'fs'

const dirWhere = '../fs/files/wrongFilename.txt'
const dirTo = '../fs/files/properFilename.md'

const rename = async () => {
    if (!fs.existsSync(dirTo) || fs.existsSync(dirWhere)) {
        fs.rename(dirWhere, dirTo, (err) => {
      //      if (err) throw err;
      //      console.log('Rename complete!');
        })
    } else {
        console.log('FS operation failed ');
    }
};

await rename();