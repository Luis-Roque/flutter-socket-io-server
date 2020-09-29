const uni = require("./uni");

class Unis{
    constructor(){
        this.unis=[];
    }

    nuevaUni(uni= new Unis()){
        this.unis.push(uni);
    }

    obtenerUnis(){
        return this.unis;
    }

    borrarUni(id= ''){
        this.unis = this.unis.filter( uni => uni.id !== id);
        return this.unis;
    }

    votarUni(id=''){
        this.unis = this.unis.map( uni =>{
            if (uni.id == id){
                uni.votos++;
                return uni;
            }else{
                return uni;
            }
        });
    }

}

module.exports=Unis;