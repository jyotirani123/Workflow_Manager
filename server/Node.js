class Connector{

    constructor(type, multiple = false ){
        this.type = type || "destination";
        this.multiple = multiple;
    }
}
// type - database , csv , excel - xlsx

const nodeConfig = {
    connectors : {
        input : {
            enable : true,
            type : "db" , 
            dbConfig : {
                host : "localhost",
                database : "workflow_manager",
                userName : "root",
                password : "password"
            }
        },
        output :  {
            enable : true,
            type : "db" , 
            dbConfig : {
                host : "localhost",
                database : "workflow_manager",
                userName : "root",
                password : "password"
            }
        }
    },
   
    name : "Node",
    description : "Node configuration"

}
class Node{
    
    constructor(nodeConfig){
        this.nodeConfig = nodeConfig;
    }
}