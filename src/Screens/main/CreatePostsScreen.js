import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ScrollView,
  Dimensions,
} from "react-native";

import { Camera, Map } from "../../../assets/icons";

const CreatPostsScreen = () => {
  const windowHeight = Dimensions.get("window").height;

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={[
          styles.scrollViewContentContainer,
          { height: windowHeight - 250 },
        ]}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.contentWrapper}
          >
            <View style={styles.imageContainer}>
              <TouchableOpacity activeOpacity={0.7}>
                <Camera />
              </TouchableOpacity>
            </View>
            <Text style={styles.loadPhoto}>Завантажте фото</Text>
            <View style={styles.form}>
              <TextInput
                style={styles.firstInput}
                placeholder="Назва..."
                placeholderTextColor="#BDBDBD"
              />
              <View style={styles.inputContainer}>
                <Map style={styles.inputIcon} />
                <TextInput
                  style={styles.secondInput}
                  placeholder="Місцевість..."
                  placeholderTextColor="#BDBDBD"
                />
              </View>
            </View>
            <TouchableOpacity style={styles.button} activeOpacity={0.7}>
              <Text style={styles.buttonText}>Опубліковати</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
};

export default CreatPostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopColor: "#BDBDBD",
    borderStyle: "solid",
    borderWidth: 1,
  },
  scrollViewContentContainer: {
    flexGrow: 1,
  },
  contentWrapper: {
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  imageContainer: {
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
  loadPhoto: {
    marginTop: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  form: {
    marginTop: 48,
    marginBottom: 32,
  },
  firstInput: {
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: "#E8E8E8",
    paddingBottom: 15,
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    marginBottom: 32,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: "#E8E8E8",
    paddingBottom: 15,
  },
  inputIcon: {
    marginRight: 8,
  },
  secondInput: {
    flex: 1,
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  button: {
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    height: 50,
    padding: 16,
  },
  buttonText: {
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
});
