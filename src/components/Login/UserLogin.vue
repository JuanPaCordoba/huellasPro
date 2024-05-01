<template>
  <body>
    <header>
      <div class="div_header">
        <a class="a_text" href="/#/home">
          <img class="img" src="../../../public/images/logo2.png" alt="">
        </a>
      </div>
    </header>
    <div class="container">
      <div class="signin-signup">
        <form class="sign-in-form" @submit.prevent="login">
          <div class="title">
            <img src="../../../public/images/logo2.png" alt="logo de la empresa" class="logo" />
          </div>
          <div class="input-field">
            <i class="fas fa-user"></i>
            <input type="text" v-model="email" placeholder="Email" />
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" v-model="password" placeholder="Password" />
          </div>
          <button type="submit" class="btn">Login</button>
          <p class="social-text">Or Sign in with social platform</p>
          <div class="social-media">
            <a href="#" class="social-icon">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="" class="social-icon">
              <i class="fab fa-google"></i>
            </a>
          </div>
          <p class="account-text">
            Don't have an account? <a href="#" id="sign-up-btn2">Sign up</a>
          </p>
        </form>
        <form class="sign-up-form" @submit.prevent="validateFormRegister">
          <div class="title">
            <img src="../../../public/images/logo2.png" alt="logo de la empresa" class="logo" />
          </div>
          <div class="input-field">
            <i class="fas fa-user"></i>
            <input type="text" id="username" placeholder="Username" />
            <div class="error"></div>
          </div>
          <div class="input-field">
            <i class="fas fa-envelope"></i>
            <input type="text" id="email" placeholder="Email" />
            <div class="error"></div>
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" id="password" placeholder="Password" />
            <div class="error"></div>
          </div>
          <input type="submit" value="Sign up" class="btn" />
          <p class="social-text">Or Sign in with social platform</p>
          <div class="social-media">
            <a href="#" class="social-icon">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="" class="social-icon">
              <i class="fab fa-google"></i>
            </a>
          </div>
          <p class="account-text">
            Already have an account? <a href="#" id="sign-in-btn2">Sign in</a>
          </p>
        </form>
      </div>
      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>New In The Family?</h3>
            <p>
              Here, every little paw is welcomed like a star, cozy rooms and top-quality care.
              Trust us to give your furry friend an unforgettable stay while you're away!
            </p>
            <button class="btn" id="sign-in-btn">Sign in</button>
          </div>
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>New In The Family?</h3>
            <p>
              Here, every little paw is welcomed like a star, cozy rooms and top-quality care.
              Trust us to give your furry friend an unforgettable stay while you're away!
            </p>
            <button class="btn" id="sign-up-btn">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, white 50%, rgb(157, 123, 98) 50%);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.a_text {
  position: absolute;
  top: 0;
  left: 0;
}

.a_text img {
  width: 200px;
}


.container {
  position: relative;
  width: 70vw;
  height: 80vh;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.container::before {
  content: "";
  position: absolute;
  top: 0;
  left: -50%;
  width: 100%;
  height: 100%;
  background-image: url("../../../public/images/1.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 6;
  transform: translateX(100%);
  transition: 1s ease-in-out;
}

.signin-signup {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 5;
}

form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 40%;
  min-width: 238px;
  padding: 0 10px;
}

form.sign-in-form {
  opacity: 1;
  transition: 0.5s ease-in-out;
  transition-delay: 1s;
}

form.sign-up-form {
  opacity: 0;
  transition: 0.5s ease-in-out;
  transition-delay: 1s;
}



.title .logo {

  width: 190px;
  height: auto;
}

.input-field {
  width: 100%;
  height: 50px;
  background: #f0f0f0;
  margin: 10px 0;
  border: 2px solid rgb(88, 46, 30);
  border-radius: 50px;
  display: flex;
  align-items: center;
}

.input-field i {
  flex: 1;
  text-align: center;
  color: #666;
  font-size: 18px;
}

.input-field input {
  flex: 5;
  background: none;
  border: none;
  outline: none;
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  color: #444;
}

/*----------------------------------------------------------------------------------------------------*/
.input-field input:focus {
  outline: 0;
}

.input-field.success input {
  border-color: #09c372;
}

.input-field.error input {
  border-color: #ff3860;
}

.input-field .error {
  color: #ff3860;
  font-size: 9px;
  height: 13px;
}

/*----------------------------------------------------------------------------------------------------*/

.btn {
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 50px;
  background: rgb(88, 46, 30);
  color: #fff;
  font-weight: 600;
  margin: 10px 0;
  text-transform: uppercase;
  cursor: pointer;
}

.btn:hover {
  background: rgb(227, 206, 179);
}

.social-text {
  margin: 10px 0;
  font-size: 16px;
}

.social-media {
  display: flex;
  justify-content: center;
}

.social-icon {
  height: 45px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #444;
  border: 1px solid #444;
  border-radius: 50px;
  margin: 0 5px;
}

a {
  text-decoration: none;
}

.social-icon:hover {
  color: #df4adf;
  border-color: #df4adf;
}

.panels-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 35%;
  min-width: 238px;
  padding: 0 10px;
  text-align: center;
  z-index: 6;
}

.left-panel {
  pointer-events: none;
}

.content {
  color: #fff;
  transition: 1.1s ease-in-out;
  transition-delay: 0.5s;
}

.panel h3 {
  font-size: 24px;
  font-weight: 600;
}

.panel p {
  font-size: 15px;
  padding: 10px 0;
}

.left-panel .content {
  transform: translateX(-200%);
}

.right-panel .image,
.right-panel .content {
  transform: translateX(0);
}

.account-text {
  display: none;
}

/*Animation*/
.container.sign-up-mode::before {
  transform: translateX(0);
}

.container.sign-up-mode .right-panel .image,
.container.sign-up-mode .right-panel .content {
  transform: translateX(200%);
}

.container.sign-up-mode .left-panel .image,
.container.sign-up-mode .left-panel .content {
  transform: translateX(0);
}

.container.sign-up-mode form.sign-in-form {
  opacity: 0;
}

.container.sign-up-mode form.sign-up-form {
  opacity: 1;
}

.container.sign-up-mode .right-panel {
  pointer-events: none;
}

.container.sign-up-mode .left-panel {
  pointer-events: all;
}

/*Responsive*/
@media (max-width:779px) {
  .container {
    width: 100vw;
    height: 100vh;
  }
}

@media (max-width:635px) {
  .container::before {
    display: none;
  }

  form {
    width: 80%;
  }

  form.sign-up-form {
    display: none;
  }

  .container.sign-up-mode2 form.sign-up-form {
    display: flex;
    opacity: 1;
  }

  .container.sign-up-mode2 form.sign-in-form {
    display: none;
  }

  .panels-container {
    display: none;
  }

  .account-text {
    display: initial;
    margin-top: 30px;
  }
}

@media (max-width:320px) {
  form {
    width: 90%;
  }
}
</style>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Importar el enrutador de Vue
import serverConfig from '/serverConfig.js';

export default {
  setup() {
    const router = useRouter(); // Obtener el enrutador
    // Definir los datos reactivos para el email y la contraseña
    const email = ref('');
    const password = ref('');

    // Función para manejar el inicio de sesión
    const login = () => {
      // Construir los parámetros de la consulta
      const params = new URLSearchParams();
      params.append('email', email.value);
      params.append('password', password.value);

      // Configurar las opciones de la solicitud
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: null
      };

      // Realizar la solicitud POST a la API
      fetch(`${serverConfig.host}:${serverConfig.puerto}/login?${params.toString()}`, requestOptions)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            // Manejar errores de la solicitud
          }
        })
        .then(data => {
          if (data.token) {
            localStorage.setItem('token', data.token);
            alert('Inicio de sesión exitoso');
            router.push('/dashboard');
          } else {
            // Manejar respuesta fallida
          }
        })
        .catch(error => {
          alert('Error: ' + error);
        });
    };

    return {
      email,
      password,
      login
    };
  }
};
</script>
