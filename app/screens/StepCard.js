import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

function StepCard({ step, ingredients, number }) {
  return (
    <View style={styles.container}>
      <View style={styles.number}>
        <Text>{number}</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text style={{ fontSize: 18 }}>{step}</Text>
        <View style={styles.ingredients}>
          <Text style={styles.ingredientsText}>Ingredients</Text>
          <ScrollView horizontal style={styles.scroll}>
            {ingredients &&
              ingredients.map((item) => (
                <View key={item.name} style={styles.card}>
                  <Text style={{ fontWeight: "bold", color: "white" }}>
                    {item.name}
                  </Text>
                </View>
              ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
  },
  number: {
    padding: 10,
    borderRadius: 25,
    backgroundColor: "#f95",
    width: 50,
    height: 50,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    margin: 10,
    backgroundColor: "#9f8",
    padding: 10,
    borderRadius: 20,
    flex: 1,
  },
  card: {
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#08f",
    borderRadius: 20,
    margin: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  scroll: {},
  ingredients: {
    flexDirection: "row",
  },
  ingredientsText: {
    backgroundColor: "#f50",
    color: "white",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
});

export default StepCard;
