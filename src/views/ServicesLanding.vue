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
                <a href="/#/AboutUsLanding" class="nav-opcion fw-7">Sobre nosotros</a>
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
        <source src="images/y.mp4" type="video/mp4">
      </video>
      <div class="content">
        <h1>SERVICIOS</h1>
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
                <h3 class="title-box-name">Nuestros servicios</h3>
                <div class="title-separator mx-auto"></div>
                <p class="text title-box-text">
                  <b>En nuestra instalación de cuidado y hospedaje para mascotas,
                    entendemos que tu amigo peludo es una parte invaluable de tu
                    familia. En Huellitas, nos comprometemos a
                    proporcionarle a tu mascota la mejor atención y comodidad
                    durante su estancia con nosotros. Nuestro equipo de profesionales
                    amantes de los animales está dedicado a ofrecer un ambiente seguro,
                    feliz y saludable para todos nuestros huéspedes.!</b>
                </p>
              </div>
            </div>

            <div class="articles-list d-flex flex-wrap justify-content-center">
              <article class="articles-item">
                <div class="card">
                  <img src="images/serviceFototerapia.jpeg" class="card-img" alt="">
                  <div class="card-body">
                    <h1 class="card-title">Fototerapia</h1>
                    <p class="card-info">Experimenta los beneficios curativos de la luz con
                      nuestra fototerapia especializada para mascotas. Utilizando tecnología
                      avanzada y segura, nuestra fototerapia promueve la curación de tejidos,
                      alivia el dolor y reduce la inflamación en tu mascota. </p>
                  </div>
                </div>
              </article>

              <article class="articles-item">
                <div class="card">
                  <img src="images/serviceCirugia.png" class="card-img" alt="">
                  <div class="card-body">
                    <h1 class="card-title">Cirugía</h1>
                    <p class="card-info">Nuestro servicio de cirugía veterinaria ofrece procedimientos
                      quirúrgicos seguros y avanzados para tratar una variedad de condiciones médicas en mascotas.
                      Desde cirugías de tejidos blandos hasta procedimientos ortopédicos, priorizando siempre
                      el bienestar y la seguridad de su mascota. </p>
                  </div>
                </div>
              </article>
              <article class="articles-item">
                <div class="card">
                  <img src="images/servicedentista.jpeg" class="card-img" alt="">
                  <div class="card-body">
                    <h1 class="card-title">Odontologia</h1>
                    <p class="card-info">En nuestra clínica, cuidamos la salud bucal de su mascota con nuestros
                      servicios de odontología. Desde limpiezas profesionales hasta tratamientos periodontales,
                      nos comprometemos a mantener una sonrisa brillante y saludable para su compañero peludo.</p>
                  </div>
                </div>
              </article>
              <article class="articles-item">
                <div class="card">
                  <img src="images/serviceHidroterarpia.jpg" class="card-img" alt="">
                  <div class="card-body">
                    <h1 class="card-title">Hidroterapia</h1>
                    <p class="card-info">En nuestro centro de hidroterapia, proporcionamos sesiones
                      supervisadas por terapeutas certificados, utilizando equipos especializados para
                      ayudar a los perros y gatos a recuperarse de lesiones, cirugías o enfermedades
                      crónicas de forma segura y efectiva.</p>
                  </div>
                </div>
              </article>
              <article class="articles-item">
                <div class="card">
                  <img src="images/serviceLaboratorio.jpg" class="card-img" alt="">
                  <div class="card-body">
                    <h1 class="card-title">Laboratorio</h1>
                    <p class="card-info">Nuestro laboratorio veterinario ofrece una amplia gama de
                      pruebas diagnósticas, desde análisis de sangre y orina hasta cultivos bacterianos,
                      utilizando tecnología de vanguardia para garantizar resultados precisos y rápidos. </p>
                  </div>
                </div>
              </article>
              <article class="articles-item">
                <div class="card">
                  <img src="images/serviceLimpieza.jpeg" class="card-img" alt="">
                  <div class="card-body">
                    <h1 class="card-title">Limpieza</h1>
                    <p class="card-info">En nuestro servicio de limpieza para mascotas, ofrecemos un tratamiento
                      integral para mantener la higiene y el bienestar de su compañero peludo. Desde baños relajantes
                      y cepillado de pelo hasta limpieza de orejas y corte de uñas </p>
                  </div>
                </div>
              </article>
              <article class="articles-item">
                <div class="card">
                  <img src="images/serviceSpa.jpeg" class="card-img" alt="">
                  <div class="card-body">
                    <h1 class="card-title">Spa</h1>
                    <p class="card-info">En nuestro spa para mascotas, ofrecemos una experiencia relajante y
                      rejuvenecedora para consentir a su mascota. Desde tratamientos de belleza y cuidado de la piel
                      hasta masajes terapéuticos y aromaterapia, nuestro spa proporciona una escapada de lujo donde
                      su mascota puede ser mimada y revitalizada. </p>
                  </div>
                </div>
              </article>
              <article class="articles-item">
                <div class="card">
                  <img src="images/serviceTerapia.jpg" class="card-img" alt="">
                  <div class="card-body">
                    <h1 class="card-title">Terapia</h1>
                    <p class="card-info">Nuestro servicio de terapia para mascotas ofrece una variedad de
                      enfoques terapéuticos para abordar problemas de comportamiento, estrés, ansiedad y
                      recuperación física. Desde terapia de rehabilitación física hasta terapia ocupacional y
                      actividades de enriquecimiento ambiental.</p>
                  </div>
                </div>
              </article>
              <article class="articles-item">
                <div class="card">
                  <img src="images/serviceDesparacitación.jpg" class="card-img" alt="">
                  <div class="card-body">
                    <h1 class="card-title">Desparacito</h1>
                    <p class="card-info">Nuestro servicio de desparasitación protege a su mascota de
                      infestaciones de parásitos internos y externos, asegurando su salud y bienestar óptimos.
                      Con un enfoque preventivo y efectivo, ayudamos a mantener a su amigo de cuatro patas libre
                      de gusanos y pulgas, promoviendo una vida más saludable y feliz.</p>
                  </div>
                </div>
              </article>
              <article class="articles-item">
                <div class="card">
                  <img src="images/serviceFarmacia.png" class="card-img" alt="">
                  <div class="card-body">
                    <h1 class="card-title">Farmacia</h1>
                    <p class="card-info">Nuestra farmacia veterinaria cuenta con una amplia gama de medicamentos 
                      y productos de calidad para el cuidado de su mascota. Desde medicamentos recetados hasta 
                      alimentos especializados y productos de higiene, ofrecemos todo lo que necesita para mantener 
                      a su amigo peludo sano y feliz.</p>
                  </div>
                </div>
              </article>
              <article class="articles-item">
                <div class="card">
                  <img src="images/serviceUltrasonido.jpeg" class="card-img" alt="">
                  <div class="card-body">
                    <h1 class="card-title">Ultrasonido</h1>
                    <p class="card-info">Nuestro servicio de ultrasonidos utiliza tecnología avanzada para 
                      proporcionar imágenes detalladas del interior del cuerpo de su mascota. Desde diagnósticos 
                      precisos hasta monitoreo prenatal, nuestros expertos utilizan ultrasonidos para detectar y 
                      tratar una variedad de condiciones médicas, asegurando el bienestar de su mascota.</p>
                  </div>
                </div>
              </article>
              <article class="articles-item">
                <div class="card">
                  <img src="images/serviceConsulta.jpg" class="card-img" alt="">
                  <div class="card-body">
                    <h1 class="card-title">Consultas Medicas</h1>
                    <p class="card-info">En nuestras consultas médicas, nuestros veterinarios expertos ofrecen 
                      evaluaciones completas y diagnósticos precisos para abordar las necesidades de salud de su mascota. 
                      Desde exámenes de rutina hasta tratamientos para enfermedades crónicas, estamos comprometidos a brindar 
                      la mejor atención médica posible para garantizar la salud y el bienestar de su compañero peludo.</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="sc-grid sc-grid-one">
        <div class="container">
          <div class="grid-content d-grid align-items-center">
            <div class="grid-text">
              <div class="content-wrapper text-start">
                <div class="title-box">
                  <h3 class="title-box-name text-white">Reservar una cita</h3>
                  <div class="title-separator mx-auto"></div>
                </div>

                <p class="text title-box-text text-white">
                  "¡Estamos aquí para hacer la vida más fácil para usted y su mascota!
                  Llámenos al +(57) 317-415-4499 para programar una cita o
                  visite nuestro sitio web para reservar en línea.
                  Esperamos poder atenderle pronto."
                </p>
                <button type="button" class="btn btn-white-outline">
                  Reservar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="sc-grid sc-grid-two">
        <div class="container">
          <div class="grid-content d-grid align-items-center"></div>
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




<style src="../css/services.css"></style>
<style src="../css/utilities.css"></style>
<style src="../css/card.css"></style>
