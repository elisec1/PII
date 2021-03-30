import React, { Component } from "react";
import { ScrollView, StyleSheet, Image } from "react-native";
import { Text, View } from "../components/Themed";

interface PageAccueilState {
  today: Date;
  nbChambresSurcouche: number;
  nbChambresRecouche: number;
  nbServiettes: number;
  nbDrap1P: number;
  nbDrap2P: number;
}

export default class PageAccueil extends Component<{}, PageAccueilState> {
  state: PageAccueilState = {
    today: new Date(),
    nbChambresRecouche: 0,
    nbChambresSurcouche: 0,
    nbServiettes: 0,
    nbDrap1P: 0,
    nbDrap2P: 0,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.container1}>
            <Image
              style={styles.image}
              source={{
                uri:
                  "https://img.icons8.com/carbon-copy/100/000000/calendar--v1.png",
              }}
            />
            <Text style={styles.text}>
              Aujourd'hui nous sommes le {this.state.today.getDate()}
              {"/"}
              {this.state.today.getMonth()}
              {"/"}
              {this.state.today.getFullYear()}
            </Text>
          </View>

          <View style={styles.container1}>
            <Image
              style={styles.image}
              source={{
                uri: "https://img.icons8.com/dotty/80/000000/bedroom.png",
              }}
            />
            <Text style={styles.text}>
              Vous avez{" "}
              {this.state.nbChambresRecouche + this.state.nbChambresSurcouche}{" "}
              chambres à préparer {"\n"}Dont {this.state.nbChambresSurcouche} en
              surcouche et {this.state.nbChambresRecouche} en recouche
            </Text>
          </View>

          <View style={styles.container1}>
            <Image
              style={styles.image}
              source={{
                uri: "https://img.icons8.com/wired/64/000000/towel.png",
              }}
            />
            <Text style={styles.text}>
              Pour cela vous devez préparer :{"\n"}- {this.state.nbServiettes}{" "}
              serviettes {"\n"}- {this.state.nbDrap1P} draps 1P{"\n"}-{" "}
              {this.state.nbDrap2P} draps 2P
            </Text>
          </View>

          <View style={styles.container1}>
            <Image
              style={styles.image}
              source={{
                uri:
                  "https://img.icons8.com/wired/64/000000/washing-machine.png",
              }}
            />
            <Text style={styles.text}>
              Vous trouverez tout ce qu'il vous faut à l'espace laverie
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },

  image: {
    width: 70,
    height: 70,
    margin: 10,
  },

  container1: {
    alignItems: "center",
    margin: 10,
  },
});
