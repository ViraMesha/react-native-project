import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import mountains from "../../../assets/images/mountains.jpg";
import avatar from "../../../assets/images/avatar3.png";
import avatar2 from "../../../assets/images/avatar4.png";
import send from "../../../assets/images/send.png";

const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <Image source={mountains} style={styles.image} />
        <View style={styles.commentsWrapper}>
          <Image source={avatar} style={styles.userAvatar} />
          <View style={styles.commentContent}>
            <Text style={styles.commentText}>
              Really love your most recent photo. I’ve been trying to capture
              the same thing for a few months and would love some tips!
            </Text>
            <Text style={styles.commentDate}>09 червня, 2020 | 08:40</Text>
          </View>
        </View>
        <View style={[styles.commentsWrapper, styles.evenCommentsWrapper]}>
          <View style={styles.commentContent}>
            <Text style={styles.commentText}>
              A fast 50mm like f1.8 would help with the bokeh. I’ve been using
              primes as they tend to get a bit sharper images.
            </Text>
            <Text style={[styles.commentDate, styles.evenCommentDate]}>
              09 червня, 2020 | 09:14
            </Text>
          </View>
          <Image source={avatar2} style={styles.userAvatar} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Коментувати..."
            placeholderTextColor="#BDBDBD"
            style={styles.input}
          />
          <TouchableOpacity activeOpacity={0.7} style={styles.sendIcon}>
            <Image source={send} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CommentsScreen;

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
    paddingBottom: 16,
  },
  image: {
    width: 370,
    height: 240,
    borderRadius: 8,
    marginBottom: 32,
  },
  commentsWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
  },
  userAvatar: {
    width: 28,
    height: 28,
    borderRadius: 28 / 2,
  },
  commentContent: {
    maxHeight: 103,
    maxWidth: 299,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderRadius: 6,
    padding: 16,
  },
  evenCommentsWrapper: {
    marginTop: 24,
  },
  commentText: {
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
    marginBottom: 8,
  },
  commentDate: {
    fontFamily: "Roboto-Regular",
    fontSize: 10,
    lineHeight: 12,
    textAlign: "right",
    color: "#BDBDBD",
  },
  evenCommentDate: {
    textAlign: "left",
  },
  inputContainer: {
    marginTop: 32,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: "#E8E8E8",
    borderRadius: 100,
    backgroundColor: "#F6F6F6",
    width: 370,
    height: 50,
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 8,
    paddingLeft: 16,
  },
  sendIcon: {
    marginLeft: "auto",
  },
});
