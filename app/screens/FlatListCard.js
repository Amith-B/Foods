import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList, StatusBar } from "react-native";
import http from "../services/httpService";
import { url } from "../config/config.json";

function FlatListCard(props) {
  const [appList, setAppList] = useState();

  getData = async () => {
    try {
      const res = await http.get(url);
      //console.log(res.data);
      setAppList(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 2,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      {appList && (
        <FlatList
          style={{ width: "100%" }}
          data={appList}
          keyExtractor={({ name }) => name}
          renderItem={({ item }) => {
            return (
              <View style={styles.textView} key={item.id.toString()}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            );
          }}
          ItemSeparatorComponent={renderSeparator}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: StatusBar.currentHeight,
  },
  text: {
    height: 50,
    fontWeight: "bold",
    fontSize: 20,
  },
  textView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FlatListCard;
