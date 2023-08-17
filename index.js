

const d = document;

const navigation = d.querySelector(".navigation");
const menuToggle = d.querySelector(".menu-toggle");

menuToggle.onclick = function() {
    navigation.classList.toggle('open')  //CUANDO ACTIVEMOS A TRAVES DE UN ONCLICK VA A MAPEAR TODA LA CLASSLIST(TODAS LAS CLASES) QUE TENGAMOS,
                                        // Y EL TOGGLE VA A RECONOCER QUE TENGAMOS OPEN, CUANDO ESTE EN OPEN VA A DECIR QUE TIENE QUE ABRIR ALGO 
};                                      // LO PODEMOS MANIPULAR A TRAVES DE NUESTRA HOJA DE ESTILOS 'OPEN'


const list = d.querySelectorAll('.list');

function activarLink() {
    list.forEach((item) => 
    item.classList.remove('active')) /*FORMATEO TODA MI CLASSLIST PARA QUITAR LA CLASE ACTIVE, Y DESPUES LE VUELVO*/
    this.classList.add('active')      /* A DAR LA FUNCIONALIDAD A TODOS LOS ITEMS*/
};

list.forEach((item) =>
item.addEventListener('click', activarLink)); /* LE AGREGAMOS UN EVENTO QUE MAPEA TODOS LOS ITEMS AL HACER CLICK */
                                              /* ACTIVA LA FUNCION */