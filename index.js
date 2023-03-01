function toggleMenu() {
    const menu = document.querySelector('#menu');
    menu.classList.toggle('active');
  }  

const boton = document.getElementById('contenedorBoton');
boton.addEventListener('click', toggleMenu);
