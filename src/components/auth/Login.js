import React, { useState } from "react";


import { Link } from 'react-router-dom';

const Login = () => {

const onChang1e = e => {

  guardarUsuario({
      ...usuario,
      [e.target.name] : e.target.value
  })
};
  //State para iniciar Sesion
  const [usuario,guardarUsuario] = useState({
    email: '',
    password: ''
  });
  //Extraer de usuario
  const { email,password} = usuario;


  //iniciar sesion
  const onSubmit = e => {
    e.preventDefaul();
  }

  //valirdar campos vacios


  //pasar al action


  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesion</h1>
        <form
          onSubmit={onSubmit}
        >
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
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesion"
            />
          </div>
        </form>
        <Link to = {'/nueva-cuenta'} className="enlace-cuenta">
          Obtener Cuenta
        </Link>
      </div>
    </div>
  );
};

export default Login;
