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

function ScrollOption(props) {
  const scrollView = useRef();
  const [arr, setArr] = useState([[0, "#04f"]]);
  //console.log(arr);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          let ar = [...arr];
          //console.log(ar[ar.length - 1][0]);
          ar.push([
            ar[ar.length - 1][0] + 1,
            "#" +
              Math.round(Math.random() * 9) +
              Math.round(Math.random() * 9) +
              Math.round(Math.random() * 9),
          ]);
          setArr(ar);
        }}
      >
        <View
          style={{
            width: 60,
            height: 30,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#04f",
            borderRadius: 10,
          }}
        >
          <Text style={{ fontWeight: "bold", color: "white" }}>Add</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.side}>
        <View>
          <View style={styles.option}></View>
          <View style={styles.option}></View>
          <View style={styles.option}></View>
          <View style={styles.option}></View>
          <View style={styles.option}></View>
        </View>
      </View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
        style={styles.scroll}
      >
        {arr.map((item) => (
          <View
            key={item[0]}
            style={{
              ...styles.card,
              backgroundColor: item[1],
            }}
          >
            <Text style={{ fontWeight: "bold", color: "white" }}>
              Test{item[0]}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight,
  },
  card: {
    width: 75,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#04f",
    borderRadius: 20,
    margin: 10,
  },
  scroll: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignSelf: "flex-start",
  },
  side: {
    position: "absolute",
    bottom: 50,
    right: 0,
  },
  option: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#aaa",
    margin: 5,
  },
});

export default ScrollOption;
