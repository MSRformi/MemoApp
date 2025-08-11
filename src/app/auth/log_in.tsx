import { JSX } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Link } from "expo-router";

import Header from "../../components/Header";
import Button from "../../components/Button";

const LogIn = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.inner}>
        <Text style={styles.title}>登录</Text>
        <TextInput style={styles.input} value="邮箱" />
        <TextInput style={styles.input} value="密码" />

        <Button label="提交" />

        <View style={styles.footer}>
          <Text style={styles.footerText}>还没有账户?</Text>
          <Link href='/auth/sign_up' asChild>
            <TouchableOpacity>
              <Text style={styles.footerLink}>点击注册</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: "#DDDDDD",
    backgroundColor: "#ffffff",
    height: 48,
    padding: 8,
    fontSize: 16,
    marginBottom: 16,
  },
  footer: {
    flexDirection: "row",
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: "#467FD3",
  },
});

export default LogIn;
