// import { initializeApp } from "firebase/app";
// import { initializeAuth} from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// import { getReactNativePersistence } from "firebase/auth/react-native";

// const firebaseConfig = {
//   apiKey: process.env.EXPO_PUBLIC_FB_API_KEY,
//   authDomain: process.env.EXPO_PUBLIC_FB_AUTH_DOMAIN,
//   projectId: process.env.EXPO_PUBLIC_FB_PROJECT_ID,
//   storageBucket: process.env.EXPO_PUBLIC_FB_STORAGE_BUCKET,
//   messagingSenderId: process.env.EXPO_PUBLIC_FB_MESSAGING_SENDER_ID,
//   appId: process.env.EXPO_PUBLIC_FB_APP_ID,
// };

// const app = initializeApp(firebaseConfig);
// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// });
// const db = getFirestore(app);

// export { app, auth, db };


// import { initializeApp } from "firebase/app";
// import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.EXPO_PUBLIC_FB_API_KEY,
//   authDomain: process.env.EXPO_PUBLIC_FB_AUTH_DOMAIN,
//   projectId: process.env.EXPO_PUBLIC_FB_PROJECT_ID,
//   storageBucket: process.env.EXPO_PUBLIC_FB_STORAGE_BUCKET,
//   messagingSenderId: process.env.EXPO_PUBLIC_FB_MESSAGING_SENDER_ID,
//   appId: process.env.EXPO_PUBLIC_FB_APP_ID,
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// // 设置持久化为浏览器本地存储
// setPersistence(auth, browserLocalPersistence)
//   .catch((error) => {
//     console.error("Firebase auth persistence error:", error);
//   });

// const db = getFirestore(app);

// export { app, auth, db };


// import { initializeApp } from "firebase/app";
// import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.EXPO_PUBLIC_FB_API_KEY,
//   authDomain: process.env.EXPO_PUBLIC_FB_AUTH_DOMAIN,
//   projectId: process.env.EXPO_PUBLIC_FB_PROJECT_ID,
//   storageBucket: process.env.EXPO_PUBLIC_FB_STORAGE_BUCKET,
//   messagingSenderId: process.env.EXPO_PUBLIC_FB_MESSAGING_SENDER_ID,
//   appId: process.env.EXPO_PUBLIC_FB_APP_ID,
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// (async () => {
//   try {
//     await setPersistence(auth, browserLocalPersistence);
//     console.log("Firebase auth persistence set successfully");
//   } catch (error) {
//     console.error("Firebase auth persistence error:", error);
//   }
// })();

// const db = getFirestore(app);

// export { app, auth, db };



import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FB_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FB_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FB_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FB_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FB_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };



