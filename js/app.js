import * as UI from './interfaz.js';
import API from './api.js';
import { limpiarPantalla, mostrarError} from './mostrarHTML.js';
UI.formularioBuscar.addEventListener('submit', buscarCancion);

function buscarCancion(e){
    e.preventDefault();

    limpiarPantalla();
    //Obtener datos del formulario
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    //Verificar que artista y cancion no esten vacios
    if ( artista === '' || cancion === ''){
        mostrarError('Debe ingresar Artista y Canción!');

        return;
    }



    //Uso de la API para poder buscar la cancion
    const busqueda = new API(artista,cancion);
    busqueda.consultarAPI();

}

