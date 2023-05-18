
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBW-v9hitvR0uWmp6fG77qaZ2AH9E8g4ns",
  authDomain: "netflix-clone-b2204.firebaseapp.com",
  projectId: "netflix-clone-b2204",
  storageBucket: "netflix-clone-b2204.appspot.com",
  messagingSenderId: "1098383655454",
  appId: "1:1098383655454:web:f2abf9624cfd8a2a86a40f"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth, firebaseApp };
export default db;
