import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { FlatList } from "react-native";
import Card from "./Card";
import http from "../../services/httpService";
import searchRecipes from "./../../config/searchRecipes";
import AppTextInput from "./../../components/AppTextInput";
import { TouchableHighlight } from "react-native-gesture-handler";

function CardList({ navigation }) {
  const [recipeList, setRecipeList] = useState();
  //const [searchText, setSearchText] = useState();
  const [searchValue, setSearchValue] = useState();
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState({
    search: "",
    number: 0,
  });

  getData = async (searchQuery = "", offset = 0, number = 50) => {
    try {
      const res = await http.get(
        searchRecipes(searchQuery.toString(), offset, number)
      );

      setRecipeList(res.data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
    return () => setRecipeList(null);
  }, []);

  useEffect(() => {
    if (page.number !== 18)
      getData(page.search, parseInt(page.number * 50), 50);
    else getData(page.search, parseInt(page.number * 50), 100);
    return () => setRecipeList(null);
  }, [page]);

  return (
    <View style={{ flex: 1, backgroundColor: "#f95" }}>
      {recipeList ? (
        <FlatList
          refreshing={refreshing}
          onRefresh={async () => {
            setRefreshing((st) => !st);
            setPage((page) => {
              const pageInfo = { ...page };
              pageInfo.search = "";
              pageInfo.number = 0;
              return pageInfo;
            });
            setRefreshing((st) => !st);
          }}
          onEndReached={() => console.log("end")}
          style={styles.container}
          data={recipeList}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => {
            return (
              <Card
                item={item}
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
      <View
        style={{
          width: "100%",
          flexDirection: "row",
        }}
      >
        <TouchableHighlight
          style={{ width: "100%" }}
          onPress={() => {
            console.log(typeof page);
            if (page.number !== 0)
              setPage((page) => {
                const pageInfo = { ...page };
                pageInfo.number--;
                return pageInfo;
              });
            //await getData(searchText,page*10,(page*10)+10)
          }}
          underlayColor={"#fc5"}
        >
          <View
            style={{
              ...styles.button,
              borderTopLeftRadius: 15,
              borderBottomLeftRadius: 15,
              backgroundColor: page.number === 0 ? "grey" : "blue",
              marginRight: 2,
            }}
          >
            <Text style={styles.text}>PREV</Text>
          </View>
        </TouchableHighlight>
        <View style={{ flex: 1 }}>
          <AppTextInput
            onChange={(txt) => setSearchValue(txt.nativeEvent.text)}
            icon={"search"}
            placeholder={"Search"}
            value={searchValue}
            onEndEditing={async () => {
              setPage((page) => {
                const pageInfo = { ...page };
                pageInfo.search = searchValue;
                pageInfo.number = 0;
                return pageInfo;
              });
              //await getData(searchText);
            }}
          />
        </View>
        <TouchableHighlight
          underlayColor={"#fc5"}
          style={{ width: "100%" }}
          onPress={() => {
            if (page.number !== 18)
              setPage((page) => {
                const pageInfo = { ...page };
                pageInfo.number++;
                return pageInfo;
              });
          }}
        >
          <View
            style={{
              ...styles.button,
              borderTopRightRadius: 15,
              borderBottomRightRadius: 15,
              marginLeft: 2,
              backgroundColor: page.number === 9 ? "grey" : "blue",
            }}
          >
            <Text style={styles.text}>NEXT</Text>
          </View>
        </TouchableHighlight>
      </View>
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
  button: {
    backgroundColor: "blue",
    padding: 11,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  text: {
    fontWeight: "bold",
    color: "white",
  },
});

export default CardList;
