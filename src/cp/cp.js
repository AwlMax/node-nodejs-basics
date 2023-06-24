import { spawn } from 'node:child_process';

const spawnChildProcess = async (args) => {
    try {
        const dir = '../cp/files/script.js'
        const child = spawn('node', [dir, ...args]);

        process.stdin.on('data',(msg) => {
        child.stdin.write(msg);
        });
        
        child.stdout.on('data',(msg) => {
        process.stdout.write(msg);
        });
    } catch(err) {
        console.error(err);
    }  
};

spawnChildProcess(  ['--ls, node'] );
