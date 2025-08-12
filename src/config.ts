import { initializeApp } from "firebase/app";
import { initializeAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getReactNativePersistence } from "firebase/auth/react-native";

const firebaseConfig = {
  apiKey: "AIzaSyB47xWUb1E9UdjagJrmoAgV0veUr867BiY",
  authDomain: "memoapp-7eb4a.firebaseapp.com",
  projectId: "memoapp-7eb4a",
  storageBucket: "memoapp-7eb4a.firebasestorage.app",
  messagingSenderId: "838714249897",
  appId: "1:838714249897:web:4e5273d43712a719f2cfb8",
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

const db = getFirestore(app);

export { app, auth, db };
