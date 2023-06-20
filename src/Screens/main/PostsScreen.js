import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import avatar from "../../../assets/images/avatar.png";

import Posts from "../../components/Posts/Posts";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.userContainer}>
          <Image source={avatar} />
          <View>
            <Text style={styles.userName}>Natali Romanova</Text>
            <Text style={styles.userEmail}>email@example.com</Text>
          </View>
        </View>
        <Posts placeText="Ivano-Frankivs'k Region, Ukraine" />
      </View>
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#FFFFFF",
    borderTopColor: "#BDBDBD",
    borderStyle: "solid",
    borderWidth: 1,
  },
  contentWrapper: {
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  userContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },
  userName: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  userEmail: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
});
