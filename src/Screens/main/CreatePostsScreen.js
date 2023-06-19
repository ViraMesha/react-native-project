import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import { Camera } from "../../../assets/icons";

const CreatPostsScreen = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.innerWrapper}>
        <View style={styles.block}>
          <TouchableOpacity activeOpacity={0.7}>
            <Camera />
          </TouchableOpacity>
        </View>
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
  innerWrapper: {
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  block: {
    width: 370,
    height: 240,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
    alignItems: "center",
  },
});
