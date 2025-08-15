import { JSX } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { router } from "expo-router";

// import Header from "../../components/Header";
import CircleButton from "../../src/components/CircleButton";
import Icon from "../../src/components/Icon";

const handlePress = (): void => {
  router.back();
};

const Edit = (): JSX.Element => {
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      {/* 标题 */}
      {/* <Header /> */}

      {/* 正文输入 */}
      <View style={styles.inputContainer}>
        <TextInput value={"购物清单\n买东西"} multiline style={styles.input} />
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

export default Edit;
