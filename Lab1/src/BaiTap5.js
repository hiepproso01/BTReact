import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  box: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Square = ({ text, backgroundColor = "#7ce0f9" }) => {
  return (
    <View style={[styles.box, { backgroundColor: backgroundColor }]}>
      <Text>{text}</Text>
    </View>
  );
};

export default BaiTapTH5 = () => {
  return (
    <View style={styles.container}>
      <Square text="Square 1" />
      <Square text="Square 2" backgroundColor="#4dc2c2" />
      <Square text="Square 3" backgroundColor="#ff637c" />
    </View>
  );
};

