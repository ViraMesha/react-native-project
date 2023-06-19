import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CreatPostsScreen = () => {
  return (
    <View style={styles.wrapper}>
      <View>
        <Text>CreatPostsScreen</Text>
      </View>
    </View>
  );
};

export default CreatPostsScreen;

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    backgroundColor: "#FFFFFF",
    borderTopColor: "#BDBDBD",
    borderStyle: "solid",
    borderWidth: 1,
  },
});
