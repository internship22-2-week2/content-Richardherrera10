import {Monitor} from './Monitor.js'
import {Teclado, Raton} from './DispositivoEntrada.js'

export class Computadora{
    static contadorComputadoras = 0;
    constructor(computadora){
        
        this.idComputadora = computadora.idComputadora;
        this.nombre = computadora.nombre;
        this.contadorComputadoras = ++Computadora.contadorComputadoras;
        
        this.monitor = new Monitor({
            idMonitor: computadora.monitor.idMonitor,
            marca: computadora.monitor.marca,
            tamanio: computadora.monitor.tamanio,
        })
 
        this.teclado = new Teclado({
            idTeclado: computadora.teclado.idTeclado,
            marca: computadora.teclado.marca,
            tipoEntrada: computadora.teclado.tipoEntrada,
            
        })

        this.raton = new Raton({
            idRaton: computadora.raton.idRaton,
            marca: computadora.raton.marca,
            tipoEntrada: computadora.raton.tipoEntrada,
            
        })


        

    }
}

 let monitorNuevo = new Monitor({
    idMonitor: 1,
    marca: "marca",
    tamanio: "tamanio",
}) 

let ratonNuevo = new Raton({
    idRaton: 1,
    marca: "marca raton",
    tipoEntrada: "entrada raton",
}) 
let tecladoNuevo = new Teclado({
    idTeclado: 1,
    marca: "marca teclado",
    tipoEntrada: "entrada teclado",
}) 
let compu = new Computadora({
    idComputadora: 2,
    nombre: "nueva compu",
    monitor: monitorNuevo,
    teclado: tecladoNuevo,
    raton: ratonNuevo
})

let compu2 = new Computadora({
    idComputadora: 2,
    nombre: "nueva compu",
    monitor: monitorNuevo,
    teclado: tecladoNuevo,
    raton: ratonNuevo
    
})

let compu3 = new Computadora({
    idComputadora: 3,
    nombre: "nueva compu",
    monitor: monitorNuevo,
    teclado: tecladoNuevo,
    raton: ratonNuevo
    
})
console.log(compu2)
