import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Hello from "./src/components/Hello";

export default function App() {
  // let test: number = 1;
  // test = 2;
  // // test = "test";

  // const testFunc():string =>{
  //   return 'test'
  // }

  return (
    <View style={styles.container}>
      {/* <Hello bang={true}> */}
      <Hello bang>World</Hello>
      <Hello style={{ fontSize: 16 }}>World</Hello>
      <Text>Open up App.tsx to start working on your app!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
