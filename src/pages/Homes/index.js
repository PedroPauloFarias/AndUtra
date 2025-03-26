import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

export default function Homes({ navigation }) {
  return (
    <View>
      <ScrollView>
        <Text style={{ fontSize: 15, marginTop: 15, margin: 8 }}>
          Vamos Começar!!
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Sobre")}>
          <Image
            source={{
              uri: "https://i.pinimg.com/736x/f8/ba/0b/f8ba0b02170900f52e9734ca750904bd.jpg",
            }}
            style={styles.imag}
          />
          <Text style={styles.text}>
            {" "}
            Modelo: Conjunto{"\n"}
            Cor: Diversas {"\n"}
            Tamanhos: P ao G{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Sobre")}>
          <Image
            source={{
              uri: "https://i.pinimg.com/736x/1d/dd/8a/1ddd8a2d27ef431bfff903972e7eb9dd.jpg",
            }}
            style={styles.imag}
          />
          <Text style={styles.text}>
            {" "}
            Modelo: Conjunto {"\n"}
            Cor: Diversas {"\n"}
            Tamanhos: P ao G {"\n"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginTop: 5,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: "#D3D3D3",
    borderRadius: 10,
  },
  imag: {
    height: 250,
    width: 250,
    padding: 10,
    margin: "auto",
    borderRadius: 10,
  },
});
