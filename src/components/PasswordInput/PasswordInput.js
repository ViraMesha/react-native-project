import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

const PasswordInput = ({ ...inputProps }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const inputContainerStyles = [
    styles.inputContainer,
    isFocused ? styles.inputFocused : null,
  ];
  return (
    <View style={inputContainerStyles}>
      <TextInput
        style={styles.input}
        {...inputProps}
        onFocus={handleFocus}
        onBlur={handleBlur}
        secureTextEntry={isSecureEntry}
      />
      <TouchableOpacity
        onPress={() => {
          setIsSecureEntry((prevState) => !prevState);
        }}
      >
        <Text style={styles.span}>
          {isSecureEntry ? "Показати" : "Сховати"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    padding: 16,
    height: 50,
  },
  inputFocused: {
    borderColor: "#FF6C00",
  },
  input: {
    flex: 1,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    fontWeight: "400",
  },
  span: {
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});
