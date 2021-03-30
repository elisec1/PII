import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import { FlatList } from "react-native-gesture-handler";
import ChambreDataService from "../services/chambre.service";
import Chambre from "../models/Chambre";
import ChambreItem from "../components/ChambreItem";
import { Text, View } from "../components/Themed";

interface PageRechercheState {
  textRecherche: string;
  chambres: Array<Chambre>;
}

export default class PageRecherche extends Component<{}, PageRechercheState> {
  state: PageRechercheState = {
    textRecherche: "",
    chambres: [],
  };
  loadChambres = () => {
    ChambreDataService.getAll().then((chambres) => this.setState({ chambres }));
    console.log(this.state.chambres);
  };

  componentDidMount = () => {
    this.loadChambres();
  };

  backgroundcolor = (occupee: boolean) => {
    let backgroundcolor: string;
    if (occupee == true) {
      backgroundcolor = "#FFD791";
    } else {
      backgroundcolor = "#B1FF91";
    }
    return backgroundcolor;
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerH}>
          <TextInput
            style={styles.textimput}
            placeholder={"Entrez un numéro de chambre"}
            keyboardType={"numeric"}
          />
          <TouchableOpacity
            onPress={() => {
              alert("ça fonctionne");
            }}
          >
            <Image
              style={styles.inputIcon}
              source={{
                uri:
                  "https://img.icons8.com/ios-filled/50/000000/search--v1.png",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              alert("ça fonctionne");
            }}
          >
            <Image
              style={styles.inputIcon}
              source={{
                uri: "https://img.icons8.com/wired/64/000000/filter.png",
              }}
            />
          </TouchableOpacity>
        </View>

        <FlatList
          data={this.state.chambres}
          keyExtractor={(item) => item.id_chambre.toString()}
          renderItem={({ item }: { item: Chambre }) => (
            <ChambreItem chambre={item} backgroundcolor={"red"} />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerH: {
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "gray",
    borderRadius: 20,
    borderWidth: 0.5,
  },
  textimput: {
    height: 20,
    width: 100,
    flex: 1,
    margin: 15,
  },
  inputIcon: {
    height: 30,
    width: 30,
    margin: 10,
  },
});
