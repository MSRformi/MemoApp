import { JSX, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet
} from "react-native";
import { router } from "expo-router";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db, auth } from "../../src/config";

// import Header from "../../components/Header";
import CircleButton from "../../src/components/CircleButton";
import Icon from "../../src/components/Icon";
import KeyboardAvoidingView from '../../src/components/KeyboardAvoidingView'

const handlePress = (bodyText: string): void => {
  if (auth.currentUser === null) {
    return;
  }
  const ref = collection(db, `users/${auth.currentUser.uid}/memos`);
  addDoc(ref, {
    bodyText,
    updatedAt: Timestamp.fromDate(new Date()),
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
  const [bodyText, setBodyText] = useState("");
  return (
    <KeyboardAvoidingView style={styles.container}>
      {/* 标题 */}
      {/* <Header /> */}

      {/* 正文输入 */}
      <View style={styles.inputContainer}>
        <TextInput
          multiline
          style={styles.input}
          value={bodyText}
          onChangeText={(text) => {
            setBodyText(text);
          }}
          autoFocus
        />
      </View>

      {/* 按钮 */}
      <CircleButton
        onPress={() => {
          handlePress(bodyText);
        }}
      >
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
