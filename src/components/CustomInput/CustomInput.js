import { StyleSheet, TextInput, View } from "react-native";
import { useState } from "react";

const CustomInput = ({ placeholder, secureTextEntry, ...inputProps }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const inputStyles = [styles.input, isFocused ? styles.inputFocused : null];
  return (
    <View>
      <TextInput
        style={[inputStyles]}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#BDBDBD"
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...inputProps}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    padding: 16,
    height: 50,
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    marginBottom: 16,
  },
  inputFocused: {
    borderColor: "#FF6C00",
  },
});
