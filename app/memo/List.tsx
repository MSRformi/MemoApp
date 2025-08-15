import { JSX } from "react";
import { View, StyleSheet } from "react-native";
import { router, useNavigation } from "expo-router";
import { useEffect } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
// import { Feather } from "@expo/vector-icons";

//导入组件
// import Header from "../../components/Header";
import MemoListItem from "../../src/components/MemoListItem";
import CircleButton from "../../src/components/CircleButton";
import Icon from "../../src/components/Icon";
import LogOutButton from "../../src/components/LogOut";
import { db, auth } from "../../src/config";

const handlePress = (): void => {
  router.push("memo/Create");
};

const List = (): JSX.Element => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <LogOutButton />;
      },
    });
  }, []);
  //后面的[]中输入参数的话,useEffect会随着参数变化而执行,如果为空,则只会运行组件时执行一次

  useEffect(() => {
    if (auth.currentUser === null) {
      return;
    }
    const ref = collection(db, `users/${auth.currentUser.uid}/memos`);
    const q = query(ref, orderBy("updatedAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.forEach((doc) => {
        console.log("memo", doc.data());
      });
    });
    return unsubscribe;
  }, []);
  return (
    <View style={styles.container}>
      {/* 标题 */}
      {/* <Header /> */}

      {/* 清单 */}
      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>

      {/* 加号 */}
      <CircleButton onPress={handlePress}>
        {/* <Feather name='plus' size={40}/> */}
        <Icon name="plus" size={40} color="#ffffff" />
      </CircleButton>
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
