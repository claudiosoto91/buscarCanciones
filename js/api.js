import * as UI from './interfaz.js';

class API{
    constructor(artista, cancion){
        this.artista = artista;
        this.cancion = cancion;
    }

   

    async consultarAPI(){
        
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
        
        this.mostrarSpinner();
        
        try{

            const resultado = await fetch(url);
            const respuesta = await resultado.json();
            const { lyrics }  =  respuesta;

            this.mostrarLetra( lyrics );

            if ( resultado.status === 404 ){
                UI.headingResultado.textContent = '';
                UI.divResultado.textContent = 'Canción no encontrada.';

                setTimeout(() => {
                    UI.divResultado.textContent = '';
                    UI.divResultado.classList.remove('resultado-letra');
                }, 3000);

            }
            
        } catch( error ){
            console.log(error);
        }

        UI.formularioBuscar.reset();
    }

    mostrarLetra( letra ){
        const mayuscArtista = (this.artista).toUpperCase();
        const mayuscCancion = (this.cancion).toUpperCase();

        UI.headingResultado.textContent = `${mayuscArtista} | ${mayuscCancion}`;
        UI.divResultado.textContent = letra;
        UI.divResultado.classList.add('resultado-letra');


    }

    mostrarSpinner(){
        const divSpinner = document.createElement('div');
        divSpinner.classList.add('spinner');
        divSpinner.innerHTML = `
            <div id="loading"></div>
        `;
        UI.divResultado.appendChild(divSpinner);

    }

}



export default API;