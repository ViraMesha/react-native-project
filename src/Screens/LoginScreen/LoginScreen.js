import CustomForm from "../../components/CustomForm";
import CustomInput from "../../components/CustomInput";
import PasswordInput from "../../components/PasswordInput";

const LoginScreen = () => {
  return (
    <CustomForm
      title="Увійти"
      buttonText="Увійти"
      text="Немає акаунту? Зареєструватися"
      style={{ paddingTop: 32, height: 489 }}
    >
      <CustomInput placeholder="Адреса електронної пошти" />
      <PasswordInput placeholder="Пароль" secureTextEntry={true} />
    </CustomForm>
  );
};

export default LoginScreen;
