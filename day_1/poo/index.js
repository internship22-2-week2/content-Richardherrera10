/* import {Student, Teacher} from './entity/Person.js'
import {Data} from './entity/Data.js'

class Register{
    constructor(){
        this._data = new Data();
    }

    register(person){
        let newPerson = null;
        if(person.grade){
            newPerson = new Student(person);
        }else{
            newPerson = new Teacher(person)
        } 
        console.log(newPerson);
        //para guardar
        this._data.save(newPerson)

        this.greeting(newPerson)
    }
    greeting(instance){
        instance.greet();
    }

    showData(){
        let data = this._data.getAll();
        console.table(data);
    }

    deletePerson(name){
        this._data.destroy(name)
    }
}
let student1 = {
    name: "mario",
    age: 30,
    address: "123 Main St",
    grade: "A"
}

let teacher1 = {
    name: "Jane",
    age: 30,
    address: "130 East St",
    course: "Math"
}
const registerPerson = new Register();
registerPerson.register(teacher1)
 registerPerson.showData(); */


 import {Computadora} from './entity/Computadora.js'
 import {Data} from './entity/Data.js'
 
 class Orden{
     static contadorOrden = 0
     constructor(orden){
         this._data = new Data();
         this.idOrden = orden.idOrden;
         this.contadorOrden = ++Orden.contadorOrden
         this.computadoras = []
     }
 
     ordenar(computadora){
         let nuevaComputadora = new Computadora(computadora)
  
         this.computadoras.push(nuevaComputadora)

         this._data.save(this)
     }
     
     showData(){
         let data = this._data.getAll();
         console.table(data)
     }
 
 }
 let compu = new Computadora({
     idComputadora: 1,
     nombre: "Hp Pavillion",
     monitor: {
         idMonitor: 1,
         marca: "HP",
         tamanio: "Mediano"
     },
     teclado: {
         idTeclado: 1,
         marca: "HP",
         tipoEntrada: "teclado",
     },
     raton: {
         idRaton: 1,
         marca: "LOGITECH",
         tipoEntrada: "Raton",
     }
 })

const nuevaOrden = new Orden({idOrden:122});


nuevaOrden.ordenar(compu)





nuevaOrden.showData()
