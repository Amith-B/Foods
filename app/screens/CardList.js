import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { FlatList } from "react-native";
import Card from "./Card";
import { urlRecipe } from "../config/config.json";
import http from "../services/httpService";
import food from "../services/fakeFoodService";

function CardList({ navigation }) {
  const [recipeList, setRecipeList] = useState();
  const [refreshing, setRefreshing] = useState(false);

  getData = async () => {
    try {
      const res = await http.get(urlRecipe);

      setRecipeList(res.data.recipes);
      //setRecipeList(food.recipes);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#f95" }}>
      {recipeList ? (
        <FlatList
          refreshing={refreshing}
          onRefresh={async () => {
            setRefreshing((st) => !st);
            try {
              await getData();
            } catch (error) {}
            setRefreshing((st) => !st);
          }}
          style={styles.container}
          data={recipeList}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => {
            return (
              <Card
                recipe={item}
                onPress={() => navigation.navigate("Recipe", item)}
              />
            );
          }}
        />
      ) : (
        <View style={styles.loading}>
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
              fontSize: 20,
            }}
          >
            Loading...
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: "100%" },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});

export default CardList;
