import React from "react";
import {
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Switch,
} from "react-native";
import { Chambre } from "../services/chambre.service";
import { Text, View } from "../components/Themed";

interface ChambreItemProps {
  chambre: Chambre;
  backgroundcolor: string;
}

class ChambreItem extends React.Component<ChambreItemProps, {}> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Image
            style={styles.image}
            source={{
              uri: "https://img.icons8.com/dotty/80/000000/bedroom.png",
            }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Numéro de chambre : {this.props.chambre.id_chambre}
            </Text>
            <Text style={styles.text}>
              Etage : {this.props.chambre.etage_chambre}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ChambreItem;

const styles = StyleSheet.create({
  container: {},
  text: {
    textAlign: "center",
    fontSize: 20,
  },
  touchableOpacity: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    borderWidth: 0.3,
  },
  image: {
    width: 70,
    height: 70,
    margin: 10,
    flex: 1,
  },
  textContainer: {
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flex: 4,
  },
});
