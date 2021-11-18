const transformNode = require("./TransformJob");

class TransformConfig{

    constructor(){
        this.srcPath = "./employeeJSON";
        this.destPath = "./employeeDTO";
    }

    configurationSetup(){

        const trasnform = new transformNode(this.srcPath , this.destPath);
        trasnform.transformation();
        console.log("setup called");
    }
}


module.exports = TransformConfig;