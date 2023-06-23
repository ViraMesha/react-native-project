import { StyleSheet, View } from "react-native";

const TabIcon = ({ icon: Icon, focused, backgroundColor }) => (
  <View style={[styles.tabIconContainer, focused && { backgroundColor }]}>
    <Icon
      fill={focused ? "#FFFFFF" : "#212121"}
      stroke={focused ? "#FFFFFF" : "#212121"}
    />
  </View>
);

export default TabIcon;

const styles = StyleSheet.create({
  tabIconContainer: {
    width: 70,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});
