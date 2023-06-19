import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LoginScreen, RegistrationScreen } from "./../Screens/auth";
import {
  PostsScreen,
  CreatPostsScreen,
  ProfileScreen,
  Home,
} from "./../Screens/main";
import { Grid, New, User, LogOut } from "../../assets/icons";

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
          options={{
            title: "Публікації",
          }}
          component={Home}
        />
      </MainStack.Navigator>
    );
  }
  return (
    <Tabs.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <Tabs.Screen
        name="Публікації"
        component={PostsScreen}
        options={{
          headerTitleAlign: "center",
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            fontSize: 17,
            lineHeight: 22,
            letterSpacing: -0.408,
          },
          headerStyle: {
            backgroundColor: "#FFFFFF",
            boxShadow: " 0px 0.5px 0px rgba(0, 0, 0, 0.3)",
          },
          headerRight: () => <LogOut />,
          tabBarIcon: ({ focused, color, size }) => <Grid />,
        }}
      />
      <Tabs.Screen
        name="Створити публікацію"
        component={CreatPostsScreen}
        options={{
          headerTitleAlign: "center",
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            fontSize: 17,
            lineHeight: 22,
            letterSpacing: -0.408,
          },
          headerStyle: {
            backgroundColor: "#FFFFFF",
            boxShadow: " 0px 0.5px 0px rgba(0, 0, 0, 0.3)",
          },
          tabBarIcon: ({ focused, color, size }) => <New />,
        }}
      />
      <Tabs.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => <User />,
        }}
        name="Профіль"
        component={ProfileScreen}
      />
    </Tabs.Navigator>
  );
};

export default useAuth;
