import { JSX } from "react";
import { View, Text, StyleSheet, type ViewStyle } from "react-native";

interface Props {
  children: JSX.Element;
  style?: ViewStyle;
}

const CircleButton = (props: Props): JSX.Element => {
  const { children, style } = props;
  return (
    // {/* 加号 */}
    <View style={[styles.circleButton, style]}>
      {/* ↑以上格式,后者会覆盖前者的设定 */}
      <Text style={styles.circleButtonLabel}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  circleButton: {
    borderRadius: 32,
    width: 64,
    height: 64,
    backgroundColor: "#467FD3",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 40,
    bottom: 40,

    // IOS适用的属性↓
    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 8 },

    // 安卓适用的↓
    elevation: 8,
  },
  circleButtonLabel: {
    color: "#ffffff",
    fontSize: 40,
    lineHeight: 48,
  },
});

export default CircleButton;
