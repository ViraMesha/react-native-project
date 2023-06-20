import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import useAuth from "./src/helpers/router";
import { CommentsScreen } from "./src/Screens/main";

export default function App() {
  const routing = useAuth(true);

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return <CommentsScreen />;
  // return <NavigationContainer>{routing}</NavigationContainer>;
}
