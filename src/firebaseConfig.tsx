import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBCmMiUm22EmGSJpaksYC6x3_ZsFlIvBd8",
    authDomain: "gt-online-d308b.firebaseapp.com",
    projectId: "gt-online-d308b",
    storageBucket: "gt-online-d308b.appspot.com",
    messagingSenderId: "114991811058",
    appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
