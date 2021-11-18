const Connector = require('./Connector');
const {
    jobConfig: defaultJobConfig,
    JOB_STATUS
} = require('./default');

class Job {
    constructor(jobConfig = defaultJobConfig) {
        this.jobConfig = jobConfig;
        this.inputConnector = null;
        this.outputConnector = null;
        this.#createConnectors();
        this.name = jobConfig.name;
        this.description = jobConfig.description;
        this.status = JOB_STATUS.STOP;
        this.process = null;
        this.jobFilePath = jobConfig.jobFilePath;
    }

    #createConnectors() {
        const {
            input,
            output
        } = this.jobConfig.connectors;
        if (input) {
            this.inputConnector = new Connector(input.config, false);
        }
        if (output) {
            this.outputConnector = new Connector(output.config, output.multiple);
        }
    }

    job() {
        // can be override by the child class
        console.log(">>>>>>>>>>>>> Job is running <<<<<<<<<<<<<<<<<<<")
    }

    kill() {
        // can be override by the child class
        console.log(">>>>>>>>>>>>> Killing the job <<<<<<<<<<<<<<<<<<")
    }

    run() {
        try {
            this.status = JOB_STATUS.RUNNING;
            this.job();
        } catch (err) {
            console.error(err);
            this.stop();
        } 
    }

    stop() {
        this.status = JOB_STATUS.STOP;
        this.kill();
    }
}

module.exports = Job;