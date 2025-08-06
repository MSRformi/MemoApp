import { JSX } from "react";
import { View, Text, StyleSheet } from "react-native";

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      {/* 标题 */}
      <View style={styles.header}>
        <View style={styles.headerInner}>
          <Text style={styles.headerTitle}>Memo App</Text>
          <Text style={styles.headerLogout}>Log out</Text>
        </View>
      </View>
      {/* 清单 */}
      <View>
        {/* MemoItem */}
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>购物清单</Text>
            <Text style={styles.memoListItemDate}>2025年8月5日</Text>
          </View>

          <View>
            <Text>X</Text>
          </View>
        </View>

        {/* MemoItem */}
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>购物清单</Text>
            <Text style={styles.memoListItemDate}>2025年8月5日</Text>
          </View>

          <View>
            <Text>X</Text>
          </View>
        </View>

        {/* MemoItem */}
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>购物清单</Text>
            <Text style={styles.memoListItemDate}>2025年8月5日</Text>
          </View>

          <View>
            <Text>X</Text>
          </View>
        </View>

        {/* MemoItem */}
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>购物清单</Text>
            <Text style={styles.memoListItemDate}>2025年8月5日</Text>
          </View>

          <View>
            <Text>X</Text>
          </View>
        </View>

        {/* MemoItem */}
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>购物清单</Text>
            <Text style={styles.memoListItemDate}>2025年8月5日</Text>
          </View>

          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>

      {/* 加号 */}
      <View style={styles.circleButton}>
        <Text style={styles.circleButtonLabel}>+</Text>
      </View>
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
  //header
  header: {
    backgroundColor: "#467FD3",
    height: 104,
    justifyContent: "flex-end",
  },
  headerInner: {
    alignItems: "center",
  },
  headerLogout: {
    position: "absolute",
    right: 16,
    bottom: 16,
    color: "rgba(255,255,255,0.7)",
  },
  headerTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    fontWeight: "bold",
    color: "#ffffff",
  },
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
  circleButton: {
    borderRadius: 32,
    width: 64,
    height: 64,
    backgroundColor: "#467FD3",
    justifyContent: "center",
    alignItems: "center",
    position:'absolute',
    right:40,
    bottom:40,

    // IOS适用的属性↓
    // shadowColor:'#000000',
    // shadowOpacity:0.25,
    // shadowRadius:8,
    // shadowOffset:{width:0,height:8}

    // 安卓适用的↓
    elevation:8
  },
  circleButtonLabel: {
    color:'#ffffff',
    fontSize:40,
    lineHeight:48,
  },
});

export default Index;
