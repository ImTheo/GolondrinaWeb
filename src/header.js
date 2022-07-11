import React from 'react';


/* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="View/Golondrina/css/styles.css"> */

var Header = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>Formulario CSS</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="View/Golondrina/css/styles.css" />
          <div className="contenedor-formulario contenedor">
            <div className="imagen-formulario">
            </div>
            <form className="formulario" action="validate.php" method="POST">
              <div className="texto-formulario">
                <h2>Bienvenido de nuevo</h2>
                <p>Inicia sesión con tu cuenta</p>
              </div>
              <div className="input">
                <label htmlFor="usuario">Usuario</label>
                <input placeholder="Ingresa tu nombre" type="text" id="usuario" name="usuario" />
              </div>
              <div className="input">
                <label htmlFor="clave">Contraseña</label>
                <input placeholder="Ingresa tu contraseña" type="password" id="clave" name="clave" />
              </div>
              <div className="input">
                <input type="submit" defaultValue="Login" className="form-btn" />
              </div>
            </form>
          </div>
        </div>
      );
    }
  });