import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CardList from "../screens/CardList";
import Recipe from "../screens/Recipe";
import StepList from "../screens/StepList";

const Stack = createStackNavigator();

export default RandomNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Foods"
        component={CardList}
        options={{ headerTintColor: "#f60" }}
      />
      <Stack.Screen name="Recipe" component={Recipe} />
      <Stack.Screen name="Steps" component={StepList} />
    </Stack.Navigator>
  );
};
