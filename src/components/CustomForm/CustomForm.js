import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const CustomForm = ({
  children,
  title,
  buttonText,
  text,
  style,
  onPress,
  onTextClick,
  linkText,
}) => {
  return (
    <View style={[styles.form, style]}>
      <Text style={styles.title}>{title}</Text>
      {children}
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{text}</Text>
        <TouchableOpacity onPress={onTextClick} activeOpacity={0.7}>
          <Text style={[styles.text, { textDecorationLine: "underline" }]}>
            {linkText}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomForm;

const styles = StyleSheet.create({
  form: {
    width: "100%",
    height: "60%",
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
  textWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Roboto-Regular",
    marginTop: 16,
    textAlign: "center",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});
