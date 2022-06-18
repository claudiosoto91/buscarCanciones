import * as UI from './interfaz.js';

export function mostrarError(mensaje){

    const existeError = document.querySelector('.error');

    if( !existeError ) {
        const inputEnviar = document.querySelector('.input .enviar');
        const divError = document.createElement('div');
        divError.textContent = mensaje;
        divError.classList.add('error');
        UI.divBuscar.insertBefore( divError, inputEnviar);


        setTimeout(() => {
            divError.remove();
        }, 3000);
    } 
}


export function limpiarPantalla(){
    UI.divResultado.textContent = '';
    UI.headingResultado.textContent = '';
    UI.divResultado.classList.remove('resultado-letra');
}

