import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import StepCard from "./StepCard";

function StepList({ route }) {
  const instructions = route.params[0].steps;
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.number.toString()}
        data={instructions}
        renderItem={({ item }) => (
          <StepCard
            number={item.number}
            step={item.step}
            ingredients={item.ingredients}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default StepList;
