import tl = require('azure-pipelines-task-lib/task');

async function run() 
{
    try { 
        var util    = require('util'),
        spawn   = require('child_process').spawn,
        carrier = require('carrier'),
        pl_proc = spawn('perl', ['script.pl']),
        my_carrier;

        my_carrier = carrier.carry(pl_proc.stdout);

        my_carrier.on('line', function(line:string) {
        // Do stuff...
        console.log('line: ' + line);
        });

    }
    catch (err) {
        tl.setResult(tl.TaskResult.Failed, (err as Error).message);
    }
}

run();