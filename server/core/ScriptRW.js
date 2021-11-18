const fs = require('fs');
const path = require('path');


class ScriptRW {
    constructor(__path, ext) {
        this.path = __path || '../.private';
        this.fileName = null;
        this.fileExtension = ext || 'js'
    }

    createFileName() {
        this.fileName = `${Date.now()}.${this.fileExtension}`;
    }

    writeFile(text) {
        this.createFileName();
        fs.writeFileSync(this.FilePath, text);
    }

    getFilePath(fileName) {
        this.FileName = fileName + this.fileExtension;
        return this.FilePath;
    }

    set FileName(fileName) {
        this.fileName = fileName;
    }

    get FilePath() {
        return path.resolve(__dirname, `${this.path}/${this.fileName}`);
    }

    get FileName() {
        return this.fileName;
    }
}

const fileRW = new ScriptRW();

// fileRW.writeFile("function abc(){console.log('abc')} abc();");
console.log(fileRW.readFile('1637219105120'));
