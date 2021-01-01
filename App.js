//import { StatusBar } from "expo-status-bar";
import { StatusBar } from "react-native";
import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import ScrollOption from "./app/screens/ScrollOption";
import FlatListCard from "./app/screens/FlatListCard";
import Card from "./app/screens/Card";
import Screen from "./app/components/screen";
import CardList from "./app/screens/CardList";
import AppNavigator from "./app/navigation/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  StatusBar.setBackgroundColor("orange");
  return (
    <Screen style={{ backgroundColor: "#eee" }}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Screen>
  );
}
