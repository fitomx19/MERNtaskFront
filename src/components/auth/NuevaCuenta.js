import React, { useState } from "react";

import { Link } from "react-router-dom";

const NuevaCuenta = () => {
  const onChang1e = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };
  //State para iniciar Sesion
  const [usuario, guardarUsuario] = useState({
    email: '',
    password: '',
    nombre: '',
    confirmar:''
  });
  //Extraer de usuario
  const { email, password, nombre, confirmar } = usuario;

  //iniciar sesion
  const onSubmit = (e) => {
    e.preventDefaul();

    //valirdar campos vacios

    //password de 6 caracteres

    //Los dos passwords iguales

    //pasar al action
  };

  

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Crear una Cuenta</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="nonmbre">Nombre del usuario</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu nombre"
              value={nombre}
              onChange={onChang1e}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu email"
              value={email}
              onChange={onChang1e}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Tu password"
              onChange={onChang1e}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="confirmar">Confirmar password</label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              value={confirmar}
              placeholder="Tu password"
              onChange={onChang1e}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrarme"
            />
          </div>
        </form>
        <Link to={"/"} className="enlace-cuenta">
          Volver a Iniciar Sesion
        </Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;
