import { Link } from "react-router-dom";
import "../styles/Landing.scss";
import { useState } from "react";

function Landing() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeInput = (inputValue, inputName) => {
    setEmail({
      ...email, [inputName]: inputValue,
    });
    setPassword({
      ...password, [inputName]: inputValue,
    });
  }

  const handleClick = async () => {
    try {
      if (!email || !password) {
        alert('Por favor, ingresa el email y la constraseña');
        return;
      }
      const data = {
        email: email,
        password: password,
      };
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if(!response.ok){
        alert('Inicio de sesión fallido. Por favor, verifica tu email y contraseña');
        return;
      }
      const responseData = await response.json();
      if(responseData && responseData.token) {
        alert('Inicio de sesión con éxito. Token obtenido');
      } else {
        alert ('Inicio de sesión fallido. or favor, verifica tus credenciales')
      }
    } catch(error){
      console.error('Error al procesar la solicitud:', error);
      alert('Ocurrió un error al procesar la solicitud. Por favor, intentalo de nuevo.')
    }
  }


  const handleSubmit = (ev) => {
    ev.preventDefault();
  }


  return (
    <main className="mainLanding">
      <section className="mainLanding__content">
        <h3 className="mainLanding__content__title">Iniciar sesión</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="mainLanding__content__user">
            <i className="fa-solid fa-user"/>
            <input 
            htmlFor={"email"}
            type="email" 
            id="email" 
            name="name" 
            placeholder={"ejemplo@gmail.com"}
            value={email}
            handleChangeInput={handleChangeInput}
            required/>
            Correo electrónico
          </label>
          <label for="password" className="mainLanding__content__password">
            <i className="fa-solid fa-lock"/>
            <input type="password" id="password" 
            name="password"
            placeholder={"contraseña"}
            value={password}
            handleChangeInput={handleChangeInput}
            required/>
            Contraseña
          </label>
          <label className="mainLanding__content__login">
            <input className="mainLanding__content__login--text" 
            type="submit" 
            value="Entrar"
            onClick={handleClick}
            />
          </label>
        </form>
        <p className="mainLanding__content__signup">
          ¿Nuevo por aquí? Regístrate
        </p>
      </section>
    </main>
  );
}
export default Landing;
