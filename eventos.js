// voy a seleccionar el elemento DIV

const divbtn = document.getElementById('cont');

divbtn.addEventListener('click', () => {
    alert('Hola! Soy el div');
  });



mandarAlerta = (event) => {
    event.stopPropagation();
    alert("Hola");
};

