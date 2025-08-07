import { JSX } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import Header from "../../components/Header";

const LogIn = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.inner}>

        <Text style={styles.title}>登录</Text>
        <TextInput value="邮箱" style={styles.input} />
        <TextInput value="密码" style={styles.input} />

        <View style={styles.button}>
          <Text style={styles.buttonLabel}>提交</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>还没有账户?</Text>
          <Text style={styles.footerLink}>点击注册</Text>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F0F4F8'
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
    marginBottom:24
  },
  input:{
    borderWidth:1,
    borderColor:'#DDDDDD',
    backgroundColor:'#ffffff',
    height:48,
    padding:8,
    fontSize:16,
    marginBottom:16
  },
  button:{
    backgroundColor:'#467FD3',
     borderRadius:4,
     alignSelf:'flex-start',
     marginBottom:24
  },
  buttonLabel:{
    fontSize:16,
    lineHeight:32,
    color:'#ffffff',
    paddingVertical:8,
    paddingHorizontal:24,
  },
  footer:{
    flexDirection:'row'
  },
  footerText:{
    fontSize:14,
    lineHeight:24,
    marginRight:8
  },
  footerLink:{
    fontSize:14,
    lineHeight:24,
    color:'#467FD3'
  }
});

export default LogIn;
