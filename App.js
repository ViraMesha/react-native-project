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
} from "./src/Screens/main";

const MainStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tabs.Navigator initialRouteName="Registration">
        <Tabs.Screen name="Публікації" component={PostsScreen} />
        <Tabs.Screen name="Створити публікацію" component={CreatPostsScreen} />
        <Tabs.Screen
          options={{ headerShown: false }}
          name="Профіль"
          component={ProfileScreen}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
// auth
{
  /* <MainStack.Navigator initialRouteName="Registration">
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
<MainStack.Screen name="Home" options={{title: "Публікації"}}/>
</MainStack.Navigator> */
}
