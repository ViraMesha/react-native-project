import { useState } from "react";
import CustomForm from "../../components/CustomForm";
import CustomInput from "../../components/CustomInput";
import PasswordInput from "../../components/PasswordInput";

const initialState = {
  email: "",
  password: "",
};

const LoginScreen = () => {
  const [state, setState] = useState(initialState);

  onPress = () => {
    console.log(state);
    setState(initialState);
  };

  return (
    <CustomForm
      title="Увійти"
      buttonText="Увійти"
      text="Немає акаунту? Зареєструватися"
      style={{ paddingTop: 32 }}
      onPress={onPress}
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
        value={state.password}
        onChangeText={(value) =>
          setState((prevState) => ({ ...prevState, password: value }))
        }
      />
    </CustomForm>
  );
};

export default LoginScreen;
