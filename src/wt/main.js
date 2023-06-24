import { Worker } from 'worker_threads';
import os from 'os';
import { fileURLToPath } from 'url';

const performCalculations = async () => {
    const cpuCores = os.cpus().length; 
    console.log('CPU cores = ', cpuCores);

    const dir = '../wt/worker.js'
  
    let promiseArray = [];
  
    for (let core = 0; core < cpuCores; core++) {
      const workerPromise = new Promise((resolve, reject) => {
        const worker = new Worker(dir, { workerData: { n: 10 + core }});
        worker.on('message', msg => resolve(msg));
        worker.on('error', err => reject(err));
      })
      promiseArray.push(workerPromise);      
    }

    const resultsArray = await Promise.allSettled(promiseArray);

    const formatedArray = resultsArray.map(({ status, value }) => ({
      status: status === 'fulfilled' ? 'resolved' : 'error',
      data: status === 'fulfilled' ? value : null
    }));
    
    console.dir(formatedArray);
  
};

await performCalculations();