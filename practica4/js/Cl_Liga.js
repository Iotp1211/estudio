import Cl_Partido from "./Cl_Partido.js";
export default class Cl_Liga {
    constructor() {
        this.partidos = [];
    }

    agregarPartido(partido) {
        this.partidos.push(partido);
    }
    
    juegosJugados(codigoEq) {
        let partido = this.partidos.forEach(partido => partido.jugado(codigoEq));
        let juegosJugados = 0;
        if (partido.jugado(codigoEq) === true){
            juegosJugados++};
        return juegosJugados;
         
            }

        juegosGanados(codigoEq){
            let juegosGanados = 0;
            if (partido.jugado(codigoEq) === true){
                juegosGanados ++;
                
            }
            return juegosGanados;
        };
        juegosPerdidos(codigoEq){
            let juegosPerdidos = 0;
            this.partidos.forEach(partido => partido.perdido(codigoEq));
            juegosPerdidos++;
            return juegosPerdidos;
        };
        juegosEmpatados(codigoEq) {
            let juegosEmpatados = 0;
            this.partidos.forEach(partido => partido.empatado(codigoEq));
            juegosEmpatados++;
            return juegosEmpatados;
        }
}
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    /** 
     * juegosJugados(codigoEq) {
        let juegosJugados = 0;
        for (let i = 0; i < this.partidos.length; i++) {
            if (this.partidos[i].jugado(codigoEq)) {
             juegosJugados++;
            }
        }
        return juegosJugados;
    }
    juegosGanados(codigoEq) {
        let juegosGanados = 0;
        for (let i = 0; i <= this.partidos.length; i++) {
            if (this.partidos[i].ganado(codigoEq)) {
                juegosGanados++;
            }
        }
        return juegosGanados;
    }
    juegosPerdidos(codigoEq) {
        let juegosPerdidos = 0;
        for (let i = 0; i <= this.partidos.length; i++) {
            if (this.partidos[i].perdido(codigoEq)) {
                juegosPerdidos++;
            }
        }
        return juegosPerdidos;
    }
    juegosEmpatados(codigoEq) {
        let juegosEmpatados = 0;
        for (let i = 0; i <= this.partidos.length; i++) {
            if (this.partidos[i].empatado(codigoEq)) {
                juegosEmpatados++;
            }
        }
        return juegosEmpatados;
    }
}
*/