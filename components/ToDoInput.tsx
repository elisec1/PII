import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Image, TextInput } from "react-native";
import { Text, View } from "../components/Themed";

interface ToDoInputProps {
  onSubmitingEditing: () => void;
  onChangeText: (task: string) => void;
}

class ToDoInput extends React.Component<ToDoInputProps, {}> {
  render() {
    return (
      <View
        style={styles.container}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      >
        <TextInput
          style={styles.textimput}
          placeholder="Entrez une nouvelle tâche"
          onChangeText={this.props.onChangeText}
          onSubmitEditing={this.props.onSubmitingEditing}
        />
      </View>
    );
  }
}

export default ToDoInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  textimput: {
    height: 30,
    width: 100,
    flex: 1,
    margin: 15,
  },
});
