import { JSX } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Link ,router} from "expo-router";

import Button from "../../components/Button";

const handlePress = (): void => {
  //注册
  router.push('/memo/List')
};

const SignUp = (): JSX.Element => {
  return (
    <View style={styles.container}>

      <View style={styles.inner}>
        <Text style={styles.title}>注册</Text>
        <TextInput style={styles.input} value="邮箱" />
        <TextInput style={styles.input} value="密码" />

        <Button label="提交" onPress={handlePress}/>

        <View style={styles.footer}>
          <Text style={styles.footerText}>已有账户?</Text>
          <Link href="/auth/log_in" asChild>
            <TouchableOpacity>
              <Text style={styles.footerLink}>点击登录</Text>
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

export default SignUp;
