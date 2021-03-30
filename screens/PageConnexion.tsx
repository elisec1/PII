import React, { Component } from "react";
import { StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import Input from "../components/ConnexionInput";
import authenticationService, { User } from "../services/connexion.service";
import { Text, View } from "../components/Themed";

interface AuthFormProps {
  //onAuthSuccess: (loggedUser: User) => void;
}

interface AuthFormState {
  login: string;
  password: string;
}

export default class AuthForm extends Component<AuthFormProps, AuthFormState> {
  state: AuthFormState = {
    login: "",
    password: "",
  };

  onChangeLogin = (login: string) => {
    this.setState({ login });
  };

  onChangePassword = (password: string) => {
    this.setState({ password });
  };

  signIn = () => {
    const credentials = this.state.login + "/" + this.state.password;
    const user = authenticationService.authenticate(
      this.state.login,
      this.state.password
    );
    let msg = user !== null ? "Connexion réussie" : "Erreur de connexion";
    msg += ` avec les identifiants : ${credentials}`;
    //if (user !== null) this.props.onAuthSuccess(user);
    //else Alert.alert("Action sélectionnée", msg);
  };

  resetPassword = () => {
    Alert.alert("Action sélectionnée", "Mise à jour du mot de passe");
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.formImage}
          source={{
            uri: "https://img.icons8.com/nolan/96/user-male-circle.png",
          }}
        />
        <Input
          placeholder="Email"
          imageUrl="https://img.icons8.com/nolan/96/email-sign.png"
          hideCharacters={false}
          onChangeText={this.onChangeLogin}
        />
        <Input
          placeholder="Mot de passe"
          imageUrl="https://img.icons8.com/nolan/96/private2.png"
          hideCharacters={true}
          onChangeText={this.onChangePassword}
        />
        <TouchableOpacity
          style={[styles.buttonContainer, styles.signInButton]}
          onPress={this.signIn}
        >
          <Text style={styles.loginText}>Se connecter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.resetPassword}
        >
          <Text>Mot de passe oublié ?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ECF0F1",
  },
  formImage: {
    borderBottomWidth: 1,
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  buttonContainer: {
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  signInButton: {
    backgroundColor: "skyblue",
  },
  loginText: {
    color: "white",
  },
});
