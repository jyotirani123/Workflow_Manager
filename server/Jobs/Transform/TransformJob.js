const fs = require('fs');
const {
    exec
} = require("child_process");
const {
    Job
} = require('../../core');

class TransformJob extends Job {
    constructor(srcConfig, destConfig) {
        super({
            name: "Transform Node",
            description: "It will do the transformation",
            jobFilePath: '/Users/ashishkumar/Development/Workflow_Manager/server/mock/demoScript.js',
            connectors: {
                input: srcConfig,
                output: destConfig
            }
        });
    }

    getJobScript() {
        const script = fs.readFileSync(this.jobFilePath, 'utf8');
        console.log(script);
    }

    job() {
        const out = fs.openSync('./out.log', 'a');
        const err = fs.openSync('./out.log', 'a');
        this.process = exec(`node ${this.jobFilePath}`, (error, data, getter) => {
            if (error) {
                console.log("error", error.message);
                return;
            }
            if (getter) {
                console.log("data", data);
                return;
            }
            console.log("data", data);

        }, [], {
            detached: true,
            stdio: ['ignore', out, err]
        });
        this.process.unref();
    }
}

const tJob = new TransformJob({}, {});
tJob.run();
// module.exports = TransformNode;