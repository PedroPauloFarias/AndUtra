import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function Sobre({ navigation }) {
  return (
    <View>
      <ScrollView>
        <Text style={{ fontSize: 15, margin: 10 }}> Moda Feminina</Text>
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/f8/ba/0b/f8ba0b02170900f52e9734ca750904bd.jpg",
          }}
          style={styles.imag}
        />
        <Text style={styles.title}>
          Blusa cropped estampada com alças finas e confortável, ideal para um
          look leve e estiloso. Shorts de linho bege, cintura alta com cinto
          embutido, garantindo caimento impecável. Perfeito para compor looks
          elegantes e modernos.
        </Text>
        <Text style={styles.title_2}>
          Tamanho: p ao g {"\n"}Tipo de roupa: conjunto {"\n"} Estilo: casual
        </Text>
        <Text style={{ fontSize: 15, margin: 5, padding: 5 }}>
          Recomendados
        </Text>

        <View style={styles.container}>
          <Image
            source={{
              uri: "https://www.roupasparaatacado.com.br/product_images/u/133/Conjunto-Feminino-Blogueira-LaLa__21920_zoom.jpg",
            }}
            style={styles.imag_2}
          />
          <Text style={{ fontSize: 15 }}>
            Conjunto feminino, todo em vermelho
          </Text>
        </View>

        <View style={styles.container}>
          <Image
            source={{
              uri: "https://i.pinimg.com/564x/5c/e2/23/5ce223012f4d17fcbc92d72cbc2e0369.jpg",
            }}
            style={styles.imag_2}
          />
          <Text style={{ fontSize: 15 }}>Conjunto feminino, estampado</Text>
        </View>

        <View style={styles.container}>
          <Image
            source={{
              uri: "https://lojamodai.com.br/cdn/shop/files/S2d62d291caad444986f3ab87fe82a5c6H_800x.webp?v=1697915928",
            }}
            style={styles.imag_2}
          />
          <Text style={{ fontSize: 15 }}>
            Conjunto feminino, em uma unica cor
          </Text>
        </View>
        <View style={styles.container}>
          <Image
            source={{
              uri: "https://www.eleganzastyle.com.br/cdn/shop/files/Conjunto_Feminino_Elegante_-_Mary_-_Azul_marinho_-_Loja_de_Roupa_Feminina_-_Eleganza_Style.jpg?v=1724331880",
            }}
            style={styles.imag_2}
          />
          <Text style={{ fontSize: 15 }}>Conjunto feminino, jeans</Text>
        </View>
        <View style={styles.container}>
          <Image
            source={{
              uri: "https://www.eleganzastyle.com.br/cdn/shop/files/Conjunto_Feminino_Elegante_-_Mary_-_Laranja_-_Loja_de_Roupa_Feminina_-_Eleganza_Style_700x.jpg?v=1724331904",
            }}
            style={styles.imag_2}
          />
          <Text style={{ fontSize: 15 }}>Conjunto feminino, em algodão</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DCDCDC",
    borderRadius: 10,
    marginRight: 5,
    marginLeft: 8,
    marginVertical: 5,
  },
  title: {
    padding: 1,
    textAlign: "center",
    backgroundColor: "#D3D3D3",
    borderRadius: 5,
    margin: 5,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
  },
  title_2: {
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: "#D3D3D3",
    borderRadius: 5,
  },
  imag: {
    height: 300,
    width: 300,
    padding: 10,
    margin: "auto",
    borderRadius: 10,
  },
  imag_2: {
    height: 55,
    width: 55,
    margin: 20,
    borderRadius: 25,
    marginTop: 7.5,
  },
});
