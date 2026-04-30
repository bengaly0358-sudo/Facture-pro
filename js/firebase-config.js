// js/firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCuX3t2Ax1mZbtj6Co9zpZZvXMRmFOd6go",
  authDomain: "facture-pro-2a843.firebaseapp.com",
  projectId: "facture-pro-2a843",
  storageBucket: "facture-pro-2a843.firebasestorage.app",
  messagingSenderId: "30400911697",
  appId: "1:30400911697:web:a5ddafe5dcc58c0a38db70",
  measurementId: "G-W40FSLHZYX"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Clé ImgBB
export const IMGBB_API_KEY = "534370f257aabfabfcaee69028df857f";