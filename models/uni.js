const {v4: uuidV4}= require('uuid');

class Uni{
    constructor(nombre = 'no-nombre'){
        this.id     =uuidV4();//identificador único
        this.nombre = nombre;
        this.votos  = 0;
    }
}
module.exports=Uni;