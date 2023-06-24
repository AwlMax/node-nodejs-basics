import fs from 'fs'

const dirWhere = '../fs/files/'
const dirTo = '../fs/files_copy/'

const copy = async () => {

    if (!fs.existsSync(dirTo) && fs.existsSync(dirWhere)) {
        fs.cp(dirWhere, dirTo, { recursive: true }, (err) => {});
    } else {
        console.log('FS operation failed')
    }
}

await copy();
