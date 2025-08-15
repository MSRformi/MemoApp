import { JSX } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { router } from "expo-router";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../src/config";

// import Header from "../../components/Header";
import CircleButton from "../../src/components/CircleButton";
import Icon from "../../src/components/Icon";

const handlePress = (): void => {
  addDoc(collection(db, "memos"), {
    bodyText: "test",
  })
    .then((docRef) => {
      console.log("success", docRef.id);
      router.back();
    })
    .catch((error) => {
      console.log(error);
    });
  // 简单情况用上面的代码就可以处理,复杂的就用下面的异步处理方式来处理
  // async await addDoc(collection(db, "memos"), {
  //   bodyText: "test 2",
  // }).catch((error) => {
  //   console.log(error);
  // });
  // router.back();
};

const Create = (): JSX.Element => {
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      {/* 标题 */}
      {/* <Header /> */}

      {/* 正文输入 */}
      <View style={styles.inputContainer}>
        <TextInput value="" multiline style={styles.input} />
      </View>

      {/* 按钮 */}
      <CircleButton onPress={handlePress}>
        <Icon name="check" size={40} color="#ffffff" />
      </CircleButton>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: "top",
    fontSize: 16,
    lineHeight: 24,
  },
});

export default Create;
