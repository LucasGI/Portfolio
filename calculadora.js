
    let pantalla = document.getElementById('pantalla');
    let expresion = '';

    function agregar(valor) {
      if (pantalla.textContent === '0') {
        expresion = valor;
      } else {
        expresion += valor;
      }
      pantalla.textContent = expresion;
    }

    function calcular() {
      try {
        expresion = eval(expresion).toString();
        pantalla.textContent = expresion;
      } catch {
        pantalla.textContent = 'Error';
        expresion = '';
      }
    }

    function borrar() {
      expresion = '';
      pantalla.textContent = '0';
    }

    function borrarUltimo() {
      expresion = expresion.slice(0, -1);
      pantalla.textContent = expresion || '0';
    }
  