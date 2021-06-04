
'use strict'

let nodoPantalla = document.querySelector ("#pantalla");
let nodoTiempo   = document.querySelector ("#tiempo");

let nodoStart          = document.querySelector ("#start");
let nodoStop           = document.querySelector ("#stop");
let nodoReset          = document.querySelector ("#reset");
let nodoGuardar        = document.querySelector ("#guardar");
let nodoListaTiempos   = document.querySelector (".listatiempos");

let h  = 0;
let m  = 0;
let s  = 0;
let cs = 96;
let ref_tiempo;
let horas, min, seg, centis;

/**
 * Devolver el texto que se va a pintar de un número
 * Si es menor que 10 se pone un 0 delante
 * @param {number} numero 
 */
function escribirNumero ( numero ) {
    if (numero < 10)   {
        return "0" + numero
    }  
    else {
        return numero
    }

}
function start () {
    
    ref_tiempo = setInterval (function () {      
        nodoTiempo.innerHTML = ref_tiempo;
            cs++;
            if (cs > 99) {s++; cs=0}
            if (s  > 59) {m++;  s=0}
            if (m  > 59) {h++;  m=0}
            if (h  > 24) {      h=0}

            centis  = escribirNumero( cs );
            seg     = escribirNumero( s );
            min     = escribirNumero( m );
            horas   = escribirNumero( h );
            // if (cs < 10)   {centis = "0" + cs}   else {centis = cs}
            // if (s  < 10)   {seg    = "0" + s}   else {seg    = s}
            // if (m  < 10)   {min    = "0" + m}   else {min    = m}
            // if (h  < 10)   {horas  = "0" + h}   else {horas  = h}

        nodoTiempo.innerHTML = horas + ":" + min + ":" + seg + ":" + centis 
    }, 10)
};

nodoStart.addEventListener ("click", start) 

function stop () { 
        clearInterval (ref_tiempo);
}
nodoStop.addEventListener ("click", stop) 

function reset () { 
    clearInterval (ref_tiempo);
    nodoTiempo.innerHTML = "00:00:00:00";
    h  = 0;
    m  = 0;
    s  = 0;
    cs = 0;
    nodoListaTiempos.innerHTML = ""
}
nodoReset.addEventListener ("click", reset)

function guardar () {
    nodoListaTiempos.innerHTML = nodoListaTiempos.innerHTML + `<ul><li> ${horas}:${min}:${seg}:${centis} </li></ul>`;
}
nodoGuardar.addEventListener ("click", guardar);