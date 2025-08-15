import { Redirect, router } from "expo-router";
import { JSX, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../src/config";

const Index = (): JSX.Element => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("onAuthStateChanged:", user);
      if (user !== null) {
        router.replace("/memo/List");
      }
    });
  }, []);
  return <Redirect href={"auth/log_in"} />;
};

export default Index;
