import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import avatar from "../../../assets/images/avatar.png";
import mountains from "../../../assets/images/mountains.jpg";
import { Map, Message } from "../../../assets/icons";

const PostsScreen = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.innerWrapper}>
        <View style={styles.user}>
          <Image source={avatar} />
          <View>
            <Text style={styles.name}>Natali Romanova</Text>
            <Text style={styles.email}>email@example.com</Text>
          </View>
        </View>
        <View style={styles.posts}>
          <Image source={mountains} style={styles.image} />
          <Text style={styles.subscription}>Ліс</Text>
          <View style={styles.details}>
            <View style={styles.comments}>
              <Message />
              <Text style={styles.number}>0</Text>
            </View>
            <View style={styles.map}>
              <Map />
              <Text style={styles.place}>Ivano-Frankivs'k Region, Ukraine</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostsScreen;

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
  user: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },
  name: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  email: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
  posts: {
    marginTop: 32,
  },
  image: {
    width: 370,
    height: 240,
    borderRadius: 8,
  },
  subscription: {
    marginTop: 8,
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 11,
  },
  comments: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  number: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  map: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  place: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    textDecorationLine: "underline",
  },
});
