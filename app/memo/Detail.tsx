import { JSX } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import {router} from 'expo-router'

// import Header from "../../components/Header";
import CircleButton from "../../src/components/CircleButton";
import Icon from "../../src/components/Icon";

const handlePress = (): void => {
  router.push('/memo/Edit')

};

const Detail = (): JSX.Element => {
  return (
    <View style={styles.container}>
      {/* <Header /> */}

      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>购物清单</Text>
        <Text style={styles.memoDate}>2025年8月7日</Text>
      </View>

      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>
          购物清单 例文例文例文例文例文例文例文
          例文例文例文例文例文例文例文例文例文例文 例文例文例文例文例文例文例文
          例文例文例文例文例文例文例文例文例文例文 例文例文例文例文例文例文例文
          例文例文例文例文例文例文例文例文例文例文 例文例文例文例文例文例文例文
          例文例文例文例文例文例文例文例文例文例文 例文例文例文例文例文例文例文
          例文例文例文例文例文例文例文例文例文例文 例文例文例文例文例文例文例文
          例文例文例文例文例文例文例文例文例文例文
          很多很多很多很多很多很多很多很多很多很多
          很多很多很多很多很多很多很多很多很多很多
          很多很多很多很多很多很多很多很多很多很多
          很多很多很多很多很多很多很多很多很多很多
          很多很多很多很多很多很多很多很多很多很多
          很多很多很多很多很多很多很多很多很多很多
          很多很多很多很多很多很多很多很多很多很多
          很多很多很多很多很多很多很多很多很多很多
          很多很多很多很多很多很多很多很多很多很多
          很多很多很多很多很多很多很多很多很多很多
          很多很多很多很多很多很多很多很多很多很多
          很多很多很多很多很多很多很多很多很多很多
          很多很多很多很多很多很多很多很多很多很多
          很多很多很多很多很多很多很多很多很多很多
          很多很多很多很多很多很多很多很多很多很多
          很多很多很多很多很多很多很多很多很多很多
          很多很多很多很多很多很多很多很多很多很多
          很多很多很多很多很多很多很多很多很多很多
          很多很多很多很多很多很多很多很多很多很多
          很多很多很多很多很多很多很多很多很多很多
          很多很多很多很多很多很多很多很多很多很多
          很多很多很多很多很多很多很多很多很多很多
          很多很多很多很多很多很多很多很多很多很多
          很多很多很多很多很多很多很多很多很多很多
          很多很多很多很多很多很多很多很多很多很多
          很多很多很多很多很多很多很多很多很多很多
          很多很多很多很多很多很多很多很多很多很多
        </Text>
      </ScrollView>

      <CircleButton onPress={handlePress} style={{ top: 60, bottom: "auto" }}>
        <Icon name="pencil" size={40} color="#ffffff" />
      </CircleButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  memoHeader: {
    backgroundColor: "#467FD3",
    height: 96,
    justifyContent: "center",
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: "#ffffff",
    fontSize: 20,
    lineHeight: 32,
    fontWeight: "bold",
  },
  memoDate: {
    color: "#ffffff",
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoBodyText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#000000",
  },
});
export default Detail;
