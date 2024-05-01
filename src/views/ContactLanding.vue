<template>
     <div class="page-wrapper">
        <nav class="navbar">
            <div class="container">
                <div class="navbar-content d-flex justify-content-between align-items-center">
                    <div class="brand-and-toggler d-flex align-items-center justify-content-between">
                        <a href="#" class="navbar-brand d-flex align-items-center">
                            <div class="logo-circle">
                                <img src="images/logo.png" alt="Logo de huellitas">
                            </div>
                            <span class="brand-text fw-7">Huellitas</span>
                        </a>
                        <button type="button" class="d-none navbar-show-btn">
                            <i class="fas fa-bars"></i>
                        </button>
                    </div>
                    <div class="navbar-box">
                        <button type="button" class="navbar-hide-btn">
                            <i class="fas fa-times"></i>
                        </button>
                        <ul class="navbar-nav d-flex align-items-center">
                            <li class="nav-item">
                                <!-- Reemplaza el texto con la imagen -->
                                <a href="index.html" class="nav-opcion fw-7">Home</a>
                            </li>
                            <li class="nav-item">
                                <a href="aboutUs.html" class="nav-opcion fw-7">Sobre nosotros</a>
                                <!--ul class="submenu">
                                    <li><a href="mision.html">Misión</a></li>
                                    <li><a href="#">Nuestro equipo</a></li>
                                    <li><a href="#">Consultorios</a></li>
                                </ul-->
                            </li>
                            <li class="nav-item">
                                <a href="services.html" class="nav-opcion fw-7">Servicios</a>
                            </li>
                            <li class="nav-item">
                                <a href="contact.html" class="nav-opcion fw-7">Contacto</a>
                            </li>
                            <li class="">
                                <a href="login.html" class="nav-link"></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        <div class="video-container">
            <video autoplay loop muted class="back-video">
                <source src="images/ContactHome.mp4" type="video/mp4">
            </video>
            <div class="content">
                <h1>Contacto</h1>
                <a href="#" class="explore-link" @click.prevent="scrollToServices">Explorar</a>
            </div>
        </div>
        <main>
            <section class="sc-services" id="services-section">
                <div class="services-shape">
                    <img src="images/curve-shape-1.png" alt="" />
                </div>
                <div class="container">
                    <div class="services-content">
                        <div class="title-box text-center">
                            <div class="content-wrapper">
                                <h3 class="title-box-name">Horarios de atención</h3>
                                <div class="title-separator mx-auto"></div>
                                <p class="text title-box-text">
                                    <b class="text title-box-text">
                                        <i class="fas fa-clock"></i>
                                        Lunes - Viernes: 7:30 am - 5:30 pm
                                    </b>
                                    <br> <b class="text title-box-text">
                                        <i></i> Sabado: 8:00 am - 5:00 pm </b>
                                    <br> <b class="text title-box-text">
                                        <i class="fas fa-phone"></i> Teléfono: (555) 555-5555 </b>
                                        <br> <b class="text title-box-text">
                                            <i class="fas fa-map-marker-alt"></i> Ubicación: Valledupar-cesar </b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="sc-grid sc-grid-one1">
                <div class="container">
                    <div class="grid-content d-grid align-items-center">
                        <div class="grid-img">
                            <img src="images/goodDog.svg" alt="">
                        </div>
                        <div class="grid-text">
                            <div class="content-wrapper text-start">
                                <div class="title-box">
                                </div>
                                <p class="text title-box-text text-white">
                                    En nuestra clínica, tratamos a cada mascota
                                    con el mismo amor y cuidado que brindarías tú mismo.
                                    Estamos aquí para ser tu socio en la salud y el bienestar
                                    de tus mascotas, y esperamos servir a tu familia peluda con
                                    el más alto nivel de atención y dedicación.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="sc-articles">
                <div class="articles-shape">
                    <img src="images/curve-shape-2.png" alt="" />
                </div>
                <div class="contact" id="contact">
                    <div class="articles-content">
                        <div class="articles-element">
                            <img src="images/element-img-2.png" alt="" />
                        </div>
                        <div class="title-box text-center">
                            <div class="content-wrapper">
                                <h3 class="title-box-name">Contactanos</h3>
                                <div class="title-separator mx-auto"></div>
                            </div>
                        </div>
                        <div class="container-contact">
                            <div class="imagen">
                                <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62775.31324387819!2d-73.29944963105848!3d10.464587760363166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8ab9b5d6cf71d7%3A0x84a43625b14c234a!2sValledupar%2C%20Cesar!5e0!3m2!1ses!2sco!4v1711411702021!5m2!1ses!2sco" 
                                width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" frameborder="0"></iframe>
                            </div>
                            <div class="form-contact">
                                <form class="form-container">
                                    <div class="inputBox">
                                        <label>Nombre</label>
                                        <input type="text" id="name" name="name" required>
                                    </div>
                                    <div class="inputBox">
                                        <label>Telefono</label>
                                        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" class="form-control" required>
                                    </div>
                                    <div class="inputBox">
                                        <label>Email</label>
                                        <input type="email" id="email" name="email" required>
                                    </div>
                                    <div class="inputBox">
                                        <label>Mensaje</label>
                                        <textarea id="mensaje" name="mensaje" class="form-control" required></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Enviar</button>
                                </form>
                              </div>
                          </div>
                    </div>
                </div>
            </section>
        </main>
        <footer class="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-list d-grid text-white">
                        <div class="footer-item">
                            <a href="#" class="navbar-brand d-flex align-items-center">
                                <div class="logo-circle">
                                    <img src="images/logo.png" alt="Logo de Diarymedi" />
                                </div>
                                <span class="brand-text fw-7">Huellitas</span>
                            </a>
                            <p class="text-white">
                                Huellitas ofrece atención veterinaria, cuidado de mascotas y
                                servicios de spa se encuentra disponible para todos a través
                                de dispositivos móviles y acceso en línea.
                            </p>
                            <p class="text-white copyright-text">
                                &copy; Huellitas PTY LTD 2024. All rights reserved.
                            </p>
                        </div>

                        <div class="footer-item">
                            <h3 class="footer-item-title">Compañía</h3>
                            <ul class="footer-links">
                                <li><a href="#">Sobre Nosostros</a></li>
                                <li><a href="#">Encuentra un Hotel</a></li>
                                <li><a href="#">Apps</a></li>
                            </ul>
                        </div>

                        <div class="footer-item">
                            <h3 class="footer-item-title">Region</h3>
                            <ul class="footer-links">
                                <li><a href="#">Indonesia</a></li>
                                <li><a href="#">Singapore</a></li>
                                <li><a href="#">Hongkong</a></li>
                                <li><a href="#">Canada</a></li>
                            </ul>
                        </div>

                        <div class="footer-item">
                            <h3 class="footer-item-title">Ayuda</h3>
                            <ul class="footer-links">
                                <li><a href="#">Centro de ayuda</a></li>
                                <li><a href="#">Soporte</a></li>
                                <li><a href="#">Instruciones</a></li>
                                <li><a href="#">Trabaja con Nosostros</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer-element-1">
                <img src="images/element-img-4.png" alt="" />
            </div>
            <div class="footer-element-2">
                <img src="images/element-img-4.png" alt="" />
            </div>
        </footer>
    </div>
</template>

<script>
export default {
  mounted() {
    let resizeTimer;
    window.addEventListener('resize', () => {
      document.body.classList.add('resize-animation-stopper');
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
      }, 400);
    });
  },
  methods: {
    hideNavbar() {
      const navbarBox = this.$refs.navbarBox;
      navbarBox.classList.remove('navbar-box-show');
    },
    scrollToServices() {
      const servicesSection = document.getElementById('services-section');
      const sectionPosition = servicesSection.getBoundingClientRect().top;
      const startPosition = window.pageYOffset || document.documentElement.scrollTop;
      const distance = sectionPosition - startPosition;
      const duration = 600;
      let startTime = null;

      function scrollToSection(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const currentPosition = easeInOutQuad(progress, startPosition, distance, duration);
        window.scrollTo(0, currentPosition);
        if (progress < duration) {
          requestAnimationFrame(scrollToSection);
        }
      }

      requestAnimationFrame(scrollToSection);
    }
  }
};

// Función de temporización para una transición suave
function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
}
</script>

<style src="../css/contact.css"></style>
<style src="../css/utilities.css"></style>