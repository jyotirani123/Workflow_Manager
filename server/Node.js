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
                userName : "root",
                password : "password"
            }
        },
        output : true, 
    },
   
    name : "Node",
    description : "Node configuration"

}
class Node{
    
    constructor({}){

    }
}