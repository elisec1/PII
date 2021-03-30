import React, { Component } from "react";
import { StyleSheet, Image, TextInput } from "react-native";
import { Text, View } from "../components/Themed";

interface InputProps {
  placeholder: string;
  imageUrl: string;
  hideCharacters: boolean;
  onChangeText: (text: string) => void;
}

export default class Input extends Component<InputProps, {}> {
  render() {
    return (
      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{
            uri: this.props.imageUrl,
          }}
        />
        <TextInput
          style={styles.inputText}
          placeholder={this.props.placeholder}
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          secureTextEntry={this.props.hideCharacters}
          onChangeText={this.props.onChangeText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "white",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  inputText: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center",
  },
});
