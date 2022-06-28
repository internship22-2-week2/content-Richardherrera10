export class Monitor{
    static contadorMonitores = 0 
    constructor(monitor){
        this.idMonitor = monitor.idMonitor;
        this.marca = monitor.marca;
        this.tamanio = monitor.tamanio;
        this.contadorMonitores = ++Monitor.contadorMonitores;
    }

 
}

