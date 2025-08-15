import { initializeApp } from 'firebase/app';
import {
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth/react-native';


import {
  setPersistence,
  inMemoryPersistence,
  Persistence,
  Auth
} from 'firebase/auth';  // 這邊從 'firebase/auth' 導入

import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';

const firebaseConfig = {
  apiKey: Constants.expoConfig?.extra?.EXPO_PUBLIC_FB_API_KEY,
  authDomain: Constants.expoConfig?.extra?.EXPO_PUBLIC_FB_AUTH_DOMAIN,
  projectId: Constants.expoConfig?.extra?.EXPO_PUBLIC_FB_PROJECT_ID,
  storageBucket: Constants.expoConfig?.extra?.EXPO_PUBLIC_FB_STORAGE_BUCKET,
  messagingSenderId: Constants.expoConfig?.extra?.EXPO_PUBLIC_FB_MESSAGING_SENDER_ID,
  appId: Constants.expoConfig?.extra?.EXPO_PUBLIC_FB_APP_ID,
};

console.log("🔥 Firebase config:", firebaseConfig);

const app = initializeApp(firebaseConfig);

const reactNativeStorage = {
  getItem: AsyncStorage.getItem.bind(AsyncStorage),
  setItem: AsyncStorage.setItem.bind(AsyncStorage),
  removeItem: AsyncStorage.removeItem.bind(AsyncStorage),
};

const auth: Auth = initializeAuth(app, {
  persistence: getReactNativePersistence(reactNativeStorage),
});

const db = getFirestore(app);

async function changePersistence(usePersistence: boolean): Promise<void> {
  const persistenceType: Persistence = usePersistence
    ? getReactNativePersistence(reactNativeStorage)
    : inMemoryPersistence;

  await setPersistence(auth, persistenceType);
}

export { app, auth, db, changePersistence };
