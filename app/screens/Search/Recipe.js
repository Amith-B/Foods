import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import searchRecipeWithId from "./../../config/searchRecipeWithId";
import http from "../../services/httpService";

function Recipe({ route, navigation }) {
  const [loading, setLoading] = useState(true);

  const [recipe, setRecipe] = useState();

  const item = route.params;

  getData = async () => {
    try {
      const res = await http.get(searchRecipeWithId(item.id.toString()));
      setRecipe(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {recipe && (
          <>
            <View>
              <ScrollView horizontal>
                <Text style={styles.text}>{recipe.title}</Text>
              </ScrollView>
            </View>
            {recipe?.image && (
              <Image
                style={styles.image}
                source={{
                  uri: recipe.image,
                }}
                resizeMode={"cover"}
                onLoadStart={() => console.log("Loading.....")}
                onLoadEnd={() => setLoading(false)}
              />
            )}
            {loading && recipe?.image && (
              <View style={styles.imageLoad}>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text>Loading...</Text>
                </View>
              </View>
            )}
            {!recipe?.image && (
              <View style={{ ...styles.imageLoad, top: 0 }}>
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

            <Text style={{ fontSize: 15, padding: 10 }}>
              {recipe?.instructions &&
                recipe.instructions.replace(/(<([^>]+)>)/gi, "")}{" "}
            </Text>
            <Button
              title="Step wise instructions"
              onPress={() =>
                navigation.navigate("Steps", recipe.analyzedInstructions)
              }
            />
          </>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: "#fb6",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    height: 250,
    width: "100%",
  },
  imageLoad: {
    height: 250,
    width: "100%",
    //position: "absolute",
    top: 30,
    backgroundColor: "white",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Recipe;
