/**
LIGA DE FUTBOL
En la liga de futbol DCyT 2024 participaron varios equipos. De cada partido se conoce: codigoEq1, codigoEq2, golesEq1, golesEq2.
La directiva de la Liga contrata a un dise;ador de APPs par llevar los resultados de los juegos y conocer por equipo: la cantidad
de juegos ganados, empatados y perdidos.

Luego de verificar el diseño, se obtuvo el siguiente diagrama de clases:
 
Cl_Liga                                                               | Cl_Partido                                          
- Partidos: array[Cl_Partido]                                         |- numero
+constructor()                                                        |-codigoEq1
+agregarPartido({numero, codigoEq1, codigoEq2, golesEq1, golesEq2})   |-codigoEq2
+juegosJugados(codigoEq)                                              |-golesEq1
+juegosGanados(codigoEq)                                              |-golesEq2
+juegosPerdidos(codigoEq)                                             |+contructor(c1, c2, g1, g2)
+juegosEmpatados(codigoEq)                                            |+jugado(codigoEq)
                                                                      |+ganado(codigoEq)
                                                                      |+perdido(codigoEq)
                                                                      |+empatado(codigoEq)

Las especificaciones de cada metodo en Cl_Partido: 
-jugado(codigoEq): return true si codigoEq jugo este partido
-ganado(codigoEq): return true si lo gano codigoEq, falso en cualquier otro caso
-perdido(codigoEq): return true si lo perdio codigoEq, falso en cualquier otro caso
-empatado(codigoEq): return true si codigoEq jugo el partido y el resultado fue igual para ambos equipos

Las especificaciones de cada metodo en Cl_Liga: 
-juegosJugados(codigoEq): return la cantidad de juegos jugados por codigoEq
-juegosGanados(codigoEq): return la cantidad de juegos ganados por codigoEq
-juegosPerdidos(codigoEq): return la cantidad de juegos perdidos por codigoEq
-juegosEmpatados(codigoEq): return la cantidad de juegos empatados por codigoEq

Ej de datos de entrada:
numero     Equipo 1  Equipo 2  GolesEq1 GolesEq2
1            222       444         1        2
2            111       222         0        0
3            333       222         3        0
4            444       111         1        1
5            333       444         2        1


Cuando se corre el programa para los 4 equipos, se debe reportar algo como esto:
Equipo      JJ     JG     JP     JE
111         2      0      0      2
222         3      0      2      1     
333         2      2      0      0
444         3      1      1      1

 */


import Cl_Liga from "./Cl_Liga.js";
import Cl_Partido from "./Cl_Partido.js";
import Dt_Partido from "./Dt_Partido.js";

let liga = new Cl_Liga;
let agregarPartido = (liga) => {
    let codigoEq1 = prompt("Ingrese el codigo del equipo 1");
    let codigoEq2 = prompt("Ingrese el codigo del equipo 2");
    let golesEq1 = prompt("Ingrese los goles del equipo 1");
    let golesEq2 = prompt("Ingrese los goles del equipo 2");
    liga.agregarPartido(new Cl_Partido(codigoEq1, codigoEq2, golesEq1, golesEq2));
}
Dt_Partido.forEach(partido => {
    liga.agregarPartido(new Cl_Partido(partido.codigoEq1, partido.codigoEq2, partido.golesEq1, partido.golesEq2));
});
let salida = document.getElementById("CUCACUCA");

opcion.onclick = () => {
    let opcion = prompt("Ingrese la opcion que desea realizar");
    switch(opcion){
    case "1":
        salida.innerText = agregarPartido(liga);
        break;
    case "2":
        let equipo = prompt("Ingrese el codigo del equipo");
        let juegosJugados = liga.juegosJugados(equipo);
        let juegosGanados = liga.juegosGanados(equipo);
        let juegosPerdidos = liga.juegosPerdidos(equipo);
        let juegosEmpatados = liga.juegosEmpatados(equipo);
        salida.innerText = `Juegos jugados: ${juegosJugados} juegos ganados: ${juegosGanados} juegos perdidos: ${juegosPerdidos} 
        juegos empatados: ${juegosEmpatados}`;
        break;
    
}

}