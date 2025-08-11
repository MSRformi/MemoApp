import { JSX } from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";

import Icon from "./Icon";

const MemoListItem = ():JSX.Element=> {
  return (
    //MemoItem
    <View style={styles.memoListItem}>
      <View>
        <Text style={styles.memoListItemTitle}>购物清单</Text>
        <Text style={styles.memoListItemDate}>2025年8月5日</Text>
      </View>

      <TouchableOpacity>
        <Icon name='delete' size={32} color="#B0B0B0"/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // memolist
  memoListItem: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    //竖
    paddingHorizontal: 19,
    //横
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,0.15)",
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: "#848484",
  },
})

export default MemoListItem
