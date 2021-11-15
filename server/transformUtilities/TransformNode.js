const EmployeeDTO = require ('./employeeDTO');
class TransformNode{

    constructor(srcPath , destPath){
        this.srcPath = srcPath;
        this.destPath = destPath;
    }


    transformation(){
        const src = require(this.srcPath);
        const dest = require(this.destPath);

        console.log(src.firstName);
        console.log(src.lastName);

        let fullName = src.firstName +  " : " + src.lastName;

        const dto  = new EmployeeDTO();

        dto.fullName = fullName;

        console.log(dto.fullName);

    }
}

module.exports = TransformNode;