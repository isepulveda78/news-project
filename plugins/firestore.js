import firebase from "firebase/app";
import "firebase/firestore";

if (!firebase.apps.length) {
    var config = {
        apiKey: "AIzaSyAAE2PBPztqor8dxPURBQgnXh2X4M7XUug",
        authDomain: "nuxt-news-feed-b31f7.firebaseapp.com",
        databaseURL: "https://nuxt-news-feed-b31f7.firebaseio.com",
        projectId: "nuxt-news-feed-b31f7",
        storageBucket: "nuxt-news-feed-b31f7.appspot.com",
        messagingSenderId: "642131018188",
        appId: "1:642131018188:web:6fb5d1c6aa6082faa2dd69",
        measurementId: "G-XG1F7CFJK1"
    };
  firebase.initializeApp(config);
  firebase.firestore().settings({
    timestampsInSnapshots: true
  });
}

const db = firebase.firestore();

export default db;


