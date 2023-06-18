import { StyleSheet, View, Image } from "react-native";
import { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomForm from "../components/CustomForm";
import PasswordInput from "../components/PasswordInput";
import AddIcon from "../../assets/images/add.png";
import Wrapper from "../components/Wrapper/Wrapper";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const RegistrationScreen = () => {
  const [state, setState] = useState(initialState);

  onPress = () => {
    console.log(state);
    setState(initialState);
  };

  return (
    <Wrapper>
      <View style={styles.wrapper}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Image source={AddIcon} style={styles.plusIcon} />
          </View>
        </View>
        <CustomForm
          title="Реєстрація"
          buttonText="Зареєстуватися"
          text="Вже є акаунт? Увійти"
          style={{ paddingTop: 92, height: "100%" }}
          onPress={onPress}
        >
          <CustomInput
            placeholder="Логін"
            value={state.login}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, login: value }))
            }
          />
          <CustomInput
            placeholder="Адреса електронної пошти"
            value={state.email}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, email: value }))
            }
          />
          <PasswordInput
            placeholder="Пароль"
            placeholderTextColor="#BDBDBD"
            value={state.password}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, password: value }))
            }
          />
        </CustomForm>
      </View>
    </Wrapper>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "80%",
    position: "relative",
  },
  avatarContainer: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -60 }],
    zIndex: 10,
  },
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  plusIcon: {
    position: "absolute",
    bottom: 25 / 2,
    right: -25 / 2,
    width: 25,
    height: 25,
  },
});
