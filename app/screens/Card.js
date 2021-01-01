import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import { urlRecipe } from "../config/config.json";
import http from "../services/httpService";
import { TouchableHighlight } from "react-native-gesture-handler";

function Card({ recipe, onPress }) {
  const type = [
    "vegetarian",
    "vegan",
    "glutenFree",
    "dairyFree",
    "veryHealthy",
    "cheap",
    "veryPopular",
    "sustainable",
  ];
  const typeArr = type.filter((i) => recipe[i] === true);
  return (
    <TouchableHighlight onPress={onPress} underlayColor={"#fc5"}>
      <View style={styles.container}>
        <View style={styles.padd}>
          {recipe?.image && (
            <Image
              style={styles.image}
              source={{
                uri: recipe.image,
              }}
            />
          )}
          {!recipe?.image && (
            <View style={styles.imageLoad}>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text>No Image!</Text>
              </View>
            </View>
          )}
          <ScrollView horizontal>
            <Text style={styles.text}>{recipe?.title}</Text>
          </ScrollView>

          <ScrollView horizontal style={styles.scroll}>
            {typeArr &&
              typeArr.map((item) => (
                <View key={item} style={styles.card}>
                  <Text style={{ fontWeight: "bold", color: "white" }}>
                    {item}
                  </Text>
                </View>
              ))}
          </ScrollView>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 400,
    borderRadius: 25,
    overflow: "hidden",
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
  padd: {
    margin: 10,
    borderRadius: 25,
    backgroundColor: "#fff",
    overflow: "hidden",
    flex: 1,
  },
  image: {
    height: 300,
    width: "100%",
  },
  imageLoad: {
    height: 300,
    width: "100%",
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
    color: "black",
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Card;
