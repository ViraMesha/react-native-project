import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import BGImage from "../../../assets/images/bg.png";
import avatar from "../../../assets/images/avatar2.png";
import remove from "../../../assets/images/remove.png";
import { LogOut } from "../../../assets/icons";
import Posts from "../../components/Posts/Posts";

const ProfileScreen = () => {
  return (
    <ImageBackground source={BGImage} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Image source={avatar} style={styles.avatar} />
          <TouchableOpacity activeOpacity={0.7}>
            <Image source={remove} style={styles.removeIcon} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity activeOpacity={0.7}>
          <LogOut style={styles.logout} />
        </TouchableOpacity>
        <Text style={styles.userName}>Natali Romanova</Text>
        <Posts placeText="Ukraine" />
      </View>
    </ImageBackground>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: "#FFFFFF",
    height: "80%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 22,
    paddingLeft: 16,
    paddingRight: 16,
  },
  avatarContainer: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -60 }],
    zIndex: 10,
  },
  removeIcon: {
    position: "absolute",
    bottom: 25 / 2,
    right: -25 / 2,
    width: 25,
    height: 25,
  },
  logout: {
    alignSelf: "flex-end",
  },
  userName: {
    marginTop: 46,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
  },
});
