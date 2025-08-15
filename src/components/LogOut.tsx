import { JSX } from "react";
import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import { signOut } from "firebase/auth";
import { router } from "expo-router";
import { auth } from "../config";

const handlePress = (): void => {
  signOut(auth)
    .then(() => {
      router.replace("/auth/log_in");
    })
    .catch(() => {
      Alert.alert("登出失败");
    });
};
const LogOutButton = (): JSX.Element => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>登出</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    lineHeight: 24,
    color: "rgba(255,255,255,0.7)",
  },
});

export default LogOutButton;
