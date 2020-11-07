function NumeroParImpar(numero){
    if (numero%2 == 0) {
        return "Numero es par";
    } else {
        return "Numero es Impar";
    }
  }

  function BuscarCaracter(texto){
    Cadena = 'abcdefghijklmnñopqrstuvwxyz';
      if (typeof(texto)=="string") {
          if (texto.length> 1) {
            return Cadena.indexOf(texto);
          } else {
            return 'Debe ingresar solo una letra';
          }
      } else {
            return 'Debe ingresar solo una letra';
      }
  }

  function PrecioBruto(Precio){
      if (typeof(Precio)=="number" || typeof(Precio)=="BigInt") {
        Precio = Math.round(Precio *1.19);
        return Precio;
      } else {
        return 'Debe ingresar un número';
      }
  }

  function NombreDeJugador(jugador) {
    return function LanzarDado() {
      return jugador + ' Tiró un dado y salio ' + Math.round((6*Math.random()+1));
    }
  }