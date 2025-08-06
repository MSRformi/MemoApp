import { JSX } from "react";
import { View, StyleSheet } from "react-native";

//导入组件
import Header from "../../components/Header";
import MemoListItem from "../../components/MemoListItem";
import CircleButton from "../../components/CircleButton";

const List = (): JSX.Element => {
  return (
    <View style={styles.container}>
      {/* 标题 */}
      <Header />

      {/* 清单 */}
      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>

      {/* 加号 */}
      <CircleButton>+</CircleButton>
    </View>
  );
};

const styles = StyleSheet.create({
  //container
  container: {
    flex: 1,
    //↑用于扩张
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#ffffff",
  },
});

export default List;
