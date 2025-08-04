// import { JSX } from 'react'
import { JSX } from "react";
import { View, Text, StyleSheet, type TextStyle } from "react-native";

interface Props {
  children: string;
  bang?: boolean;
  //这里的bang?:  意思是指定,不指定都被允许,不加问号,就需要指定
  style?: TextStyle;
}

const Hello = (props: Props): JSX.Element => {
  const { children, bang, style } = props;
  return (
    <View>
      <Text style={[styles.text, style]}>
        {/* 当使用{[]}添加属性时,会优先显示后者的定义 */}
        Hello {children}
        {bang === true ? "!" : ""}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#ffffff",
    backgroundColor: "blue",
    fontSize: 40,
    fontWeight: "bold",
    padding: 16,
  },
});

export default Hello;
