import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import React from "react";
import RandomNavigator from "./RandomNavigator";
import SearchNavigator from "./SearchNavigator";

const Tab = createBottomTabNavigator();

export default AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={"Random"}
        component={RandomNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={"Search"}
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
