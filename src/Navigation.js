import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import Community from "./screens/Community";
import Status from "./screens/Status";
import Chat from "./screens/Chat";
import Calls from "./screens/Calls";

const Tab = createMaterialTopTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Chat"
      screenOptions={{
        tabBarAndroidRipple: { borderless: false },
        tabBarActiveTintColor: "white",
        tabBarIndicatorStyle: {
          backgroundColor: "white",
        },
        tabBarLabelStyle: {
          fontWeight: "bold",
        },
        tabBarStyle: {
          backgroundColor: "#0e806a",
        },
      }}
    >
      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-group"
              color={color}
              size={24}
            />
          ),
          tabBarLabelStyle: styles.tabBarLabel,
        }}
      />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Calls" component={Calls} />
    </Tab.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  tabBarLabel: {
    display: "none",
  },
});
