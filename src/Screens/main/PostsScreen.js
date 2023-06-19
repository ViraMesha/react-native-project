import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import avatar from "../../../assets/images/avatar.png";
import mountains from "../../../assets/images/mountains.jpg";
import { Map, Message } from "../../../assets/icons";

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
        <View style={styles.postsContainer}>
          <Image source={mountains} style={styles.image} />
          <Text style={styles.subscriptionText}>Ліс</Text>
          <View style={styles.detailsContainer}>
            <View style={styles.commentsContainer}>
              <Message />
              <Text style={styles.commentsNumber}>0</Text>
            </View>
            <View style={styles.mapContainer}>
              <Map />
              <Text style={styles.placeText}>
                Ivano-Frankivs'k Region, Ukraine
              </Text>
            </View>
          </View>
        </View>
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
  postsContainer: {
    marginTop: 32,
  },
  image: {
    width: 370,
    height: 240,
    borderRadius: 8,
  },
  subscriptionText: {
    marginTop: 8,
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 11,
  },
  commentsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  commentsNumber: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  mapContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  placeText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    textDecorationLine: "underline",
  },
});
