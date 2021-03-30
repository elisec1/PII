import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";

export default class PageLaverie extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Page en cours de développement</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  text: { textAlign: "center" },
});
