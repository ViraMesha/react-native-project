import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CustomForm from "../../components/CustomForm";
import CustomInput from "../../components/CustomInput";
import PasswordInput from "../../components/PasswordInput";
import Wrapper from "../../components/Wrapper/Wrapper";

const initialState = {
  email: "",
  password: "",
};

const LoginScreen = () => {
  const [state, setState] = useState(initialState);
  const navigation = useNavigation();

  onPress = () => {
    console.log(state);
    setState(initialState);
    navigation.navigate("Home");
  };

  onTextClick = () => {
    navigation.navigate("Registration");
  };

  return (
    <Wrapper>
      <CustomForm
        title="Увійти"
        buttonText="Увійти"
        text="Немає акаунту? "
        style={{ paddingTop: 32 }}
        onPress={onPress}
        onTextClick={onTextClick}
        linkText="Зареєструватися"
      >
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
    </Wrapper>
  );
};

export default LoginScreen;
