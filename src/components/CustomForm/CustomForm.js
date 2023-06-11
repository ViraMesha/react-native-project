import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const CustomForm = ({ children, title, buttonText, text, style }) => {
  return (
    <View style={[styles.form, style]}>
      <Text style={styles.title}>{title}</Text>
      {children}
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default CustomForm;

const styles = StyleSheet.create({
  form: {
    width: "100%",
    alignSelf: "flex-end",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingLeft: 16,
    paddingRight: 16,
  },
  title: {
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    marginBottom: 33,
  },
  button: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    height: 50,
    marginTop: 43,
    paddingBottom: 16,
    paddingTop: 16,
  },
  buttonText: {
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },
  text: {
    fontFamily: "Roboto-Regular",
    marginTop: 16,
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});
