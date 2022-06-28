class DispositivoEntrada{
    constructor(dispositivoEntrada){
        this.tipoEntrada = dispositivoEntrada.tipoEntrada;
        this.marca = dispositivoEntrada.marca;
    }
}

export class Raton extends DispositivoEntrada{
    static contadorRatones = 0
    constructor(raton){
        super(raton);
        this.idRaton = raton.idRaton;
        this.contadorRatones = ++Raton.contadorRatones;
    }
}

export class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0
    constructor(teclado){
        super(teclado);
        this.idTeclado = teclado.idTeclado;
        this.contadorTeclados = ++Teclado.contadorTeclados;
    }
}