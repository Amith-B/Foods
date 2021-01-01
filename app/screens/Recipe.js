import React, { useState } from "react";
import { View, StyleSheet, Image, Text, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

function Recipe({ route, navigation }) {
  const [loading, setLoading] = useState(true);
  const recipe = route.params;
  console.log(recipe.image);
  return (
    <View style={styles.container}>
      <ScrollView>
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
          {recipe.instructions.replace(/(<([^>]+)>)/gi, "")}{" "}
        </Text>
        <Button
          title="Step wise instructions"
          onPress={() =>
            navigation.navigate("Steps", recipe.analyzedInstructions)
          }
        />
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
