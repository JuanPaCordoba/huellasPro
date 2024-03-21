import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@fortawesome/fontawesome-free/css/all.css'; // Importar los estilos de Font Awesome



createApp(App).use(router).mount('#app');
