import React from "react";
import { View, TextInput } from "react-native";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import defaultStyles from "../config/styles";

export default function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <View style={styles.icon}>
          <FontAwesome
            name={icon}
            size={25}
            color={defaultStyles.colors.medium}
          />
        </View>
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        {...otherProps}
        style={defaultStyles.text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.white,
    borderRadius: 15,
    flexDirection: "row",
    width: "100%",
    padding: 5,
    marginVertical: 2,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
});
