const JOB_STATUS = Object.freeze({
    STOP: "STOP",
    RUNNING: "RUNNING"
});

const dbConfig = {
    host : "localhost",
    database : "workflow_manager",
    userName : "root",
    password : "password"
};

const jobConfig = {
    connectors : {
        input : {
            type : "db", 
            multiple: false,
            config: dbConfig
        },
        output :  {
            multiple: true,
            type : "db" , 
            config: dbConfig
        }
    },
    name : "Node",
    description : "Node configuration",
    jobFilePath: null
}

module.exports = {
    jobConfig,
    JOB_STATUS
}

