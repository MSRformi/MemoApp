import { JSX } from "react";
import { View, Text, StyleSheet } from "react-native";

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      {/* 标题 */}
      <View>
        <View>
          <Text>Memo App</Text>
          <Text>Log out</Text>
        </View>
      </View>
      {/* 清单 */}
      <View>
        {/* MemoItem */}
        <View>
          <View>
            <Text>购物清单</Text>
            <Text>2025年8月5日</Text>
          </View>

          <View>
            <Text>X</Text>
          </View>
        </View>
        {/* MemoItem */}
        <View>
          <View>
            <Text>购物清单</Text>
            <Text>2025年8月5日</Text>
          </View>

          <View>
            <Text>X</Text>
          </View>
        </View>
        {/* MemoItem */}
        <View>
          <View>
            <Text>购物清单</Text>
            <Text>2025年8月5日</Text>
          </View>

          <View>
            <Text>X</Text>
          </View>
        </View>
        {/* MemoItem */}
        <View>
          <View>
            <Text>购物清单</Text>
            <Text>2025年8月5日</Text>
          </View>

          <View>
            <Text>X</Text>
          </View>
        </View>
        {/* MemoItem */}
        <View>
          <View>
            <Text>购物清单</Text>
            <Text>2025年8月5日</Text>
          </View>

          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>

      {/* 加号 */}
      <View>
        <Text>+</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Index;
