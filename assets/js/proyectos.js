
const liElements = document.querySelectorAll('.contenedor-article-proyectos');
const imgProyecto = document.querySelector('.previsualizacion-img-image');
const scrollProyectos = document.querySelector('.scroll-proyectos');
const tituloProyecto = document.querySelector('.previsualizacion-h2');
const descripcionProyecto = document.querySelector('.previsualizacion-p');
const botonCopiarInfo = document.querySelectorAll('.sobreMi-info-copiar');
const modalProyecto = document.querySelector('.articles-previsualizacion');
const botonCerrarModal = document.querySelector('.boton-cerrar-modal');
const modalProyectoBlur = document.querySelector('.modalProyectoBlur');


function imgProyectoInfo(liElement){
    liElement.addEventListener('click',()=> {
    const imgElement = liElement.querySelector('.article-proyectos_image').getAttribute('src');
    imgProyecto.src = imgElement;
    tituloProyecto.innerHTML = liElement.getAttribute('data-titulo')
    descripcionProyecto.innerHTML = liElement.getAttribute('data-descripcion')
    modalProyecto.style.display = 'flex';
    modalProyectoBlur.style.display = 'block';
    });
}

liElements.forEach(liElement => {
    imgProyectoInfo(liElement)
});

botonCerrarModal.addEventListener('click', ()=> {
    modalProyecto.style.display = 'none';
    modalProyectoBlur.style.display = 'none';
})
scrollProyectos.addEventListener('mouseover',()=> {
    scrollProyectos.style.scrollbarColor = '#563bf07b transparent';
});

scrollProyectos.addEventListener('mouseout',()=> {
    scrollProyectos.style.scrollbarColor = 'transparent  transparent';
});

botonCopiarInfo.forEach(boton => {
    boton.addEventListener('click',(event)=> {
        let texto = event.target.closest('.sobreMi-li').getAttribute('data-info');

        if(texto) {
            navigator.clipboard.writeText(texto)
            alert(`Copiado exitosamente \n ${texto}`);
        }

    });
})