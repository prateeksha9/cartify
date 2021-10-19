import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import { initializeApp } from "firebase/app";

// import 'firebase/firestore'

// const firebaseConfig = {
//   apiKey: "AIzaSyA7Ks7WVBwbxQi4o6TB6B7VrZ37UudUI0k",
//   authDomain: "cartify-8287a.firebaseapp.com",
//   projectId: "cartify-8287a",
//   storageBucket: "cartify-8287a.appspot.com",
//   messagingSenderId: "828771504934",
//   appId: "1:828771504934:web:3bf209b61d23ae27d3a7e7"
// };

// const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

