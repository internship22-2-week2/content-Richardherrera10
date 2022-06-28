import fs from "fs";

export class Data {
    constructor(path){
        this._path = './data.json';
    }
    readJsonFile(){
        let contentFile = fs.readFileSync(this._path,'utf-8');
        //comprobar si leyó el archivo
        if(contentFile){
            return JSON.parse(contentFile);
        }
        return [];
    }
    writeJsonFile(data){
        let jsonData = JSON.stringify(data,null, '')
        fs.writeFileSync(this._path, jsonData)
    }

    save(orden){

        let data = this.readJsonFile();

        data.push(orden)
   
        this.writeJsonFile(data);
    }

    getAll(){
        return this.readJsonFile();
    }

    
}