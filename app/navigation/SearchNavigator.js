import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CardList from "../screens/Search/CardList";
import Recipe from "../screens/Search/Recipe";
import StepList from "../screens/Search/StepList";

const Stack = createStackNavigator();

export default SearchNavigator = () => {
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
