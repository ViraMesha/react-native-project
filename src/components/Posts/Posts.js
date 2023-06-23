import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

import mountains from "../../../assets/images/mountains.jpg";
import { Map, Message } from "../../../assets/icons";

const Posts = ({ placeText }) => {
  return (
    <View style={styles.postsContainer}>
      <Image source={mountains} style={styles.image} />
      <Text style={styles.subscriptionText}>Ліс</Text>
      <View style={styles.detailsContainer}>
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.commentsContainer}>
            <Message />
            <Text style={styles.commentsNumber}>0</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.mapContainer}>
          <Map />
          <Text style={styles.placeText}>{placeText}</Text>
        </View>
      </View>
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
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
