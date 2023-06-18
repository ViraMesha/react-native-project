import { useFonts } from "expo-font";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LoginScreen, RegistrationScreen } from "./src/Screens/auth";
import {
  PostsScreen,
  CreatPostsScreen,
  ProfileScreen,
  Home,
} from "./src/Screens/main";

const MainStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const useAuth = (isAuth) => {
  if (!isAuth) {
    return (
      <MainStack.Navigator initialRouteName="Registration">
        <MainStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
        <MainStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <MainStack.Screen
          name="Home"
          options={{ title: "Публікації" }}
          component={Home}
        />
      </MainStack.Navigator>
    );
  }
  return (
    <Tabs.Navigator initialRouteName="Registration">
      <Tabs.Screen
        name="Публікації"
        component={PostsScreen}
        options={{ headerTitleAlign: "center" }}
      />
      <Tabs.Screen
        name="Створити публікацію"
        component={CreatPostsScreen}
        options={{ headerTitleAlign: "center" }}
      />
      <Tabs.Screen
        options={{ headerShown: false }}
        name="Профіль"
        component={ProfileScreen}
      />
    </Tabs.Navigator>
  );
};

export default function App() {
  const routing = useAuth(false);

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <NavigationContainer>{routing}</NavigationContainer>;
}
