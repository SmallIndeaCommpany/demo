import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyBBmJNZKjhvByowhu4txd-h5na8NZppEwE",
    authDomain: "antools.firebaseapp.com",
    projectId: "antools",
    storageBucket: "antools.appspot.com",
    messagingSenderId: "576229625646",
    appId: "1:576229625646:web:ee9f75bf38fc056b4cb4bf",
    measurementId: "G-6JC2L0KDZ0"
  };

const app = createApp(App);
initializeApp(firebaseConfig);
app.use(store);
app.use(router);
app.mount('#app');


