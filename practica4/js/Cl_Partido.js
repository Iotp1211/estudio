export default class Cl_Partido {
    constructor(numero, codigoEq1, codigoEq2, golesEq1, golesEq2) {
        this.numero = numero;
        this.codigoEq1 = codigoEq1;
        this.codigoEq2 = codigoEq2;
        this.golesEq1 = golesEq1;
        this.golesEq2 = golesEq2;
    }

    jugado(codigoEq) {
        if (this.codigoEq1 == codigoEq || this.codigoEq2 == codigoEq) {
            return true;
        }else
        return false;
    }
    ganado(codigoEq) {
        if (this.golesEq1 > this.golesEq2 && this.jugado(codigoEq) == true) {
            return true;
        }else
        return false;
    }
    perdido(codigoEq) {
        if (this.golesEq1 < this.golesEq2 && this.jugado(codigoEq) == true) {
            return true;}
             else return false;
    }
    empatado(codigoEq) {
        if (this.golesEq1 == this.golesEq2 && this.jugado(codigoEq) == true) {
            return true;
        } else
        return false;
    }
}
//else if (this.golesEq2 < this.golesEq1 && this.jugado(codigoEq) == true) {
