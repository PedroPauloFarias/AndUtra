import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";

export default function Recomendados({ navigation }) {
  const [descriçao, setDescriçao] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={{ fontSize: 20, margin: 10 }}>Para você</Text>
        <Image
          source={{
            uri: "https://www.roupasparaatacado.com.br/product_images/u/133/Conjunto-Feminino-Blogueira-LaLa__21920_zoom.jpg",
          }}
          style={styles.imag_1}
        />

        <Text style={{ fontSize: 25, margin: 10 }}>R$18,50</Text>

        <Text style={{ fontSize: 15, marginLeft: 8 }}>Tamanhos:</Text>

        <View style={{ justifyContent: "space-evenly", flexDirection: "row" }}>
          <TouchableOpacity>
            <Text style={styles.tamanho}>P</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.tamanho}>M</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.tamanho}>G</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              fontSize: 15,
              margin: 8,
              height: 52,
              backgroundColor: "#FA8072",
              borderRadius: 4,
              textAlign: "center",
            }}
          >
            <Text>Adicionar no carrinho</Text>
          </TouchableOpacity>
        </View>
        <Button
          title="Descrição"
          onPress={() =>
            setDescriçao(
              `Esse conjunto feminino é perfeito para quem busca conforto, estilo e versatilidade. Composto por um top cropped e um short curto, ele é ideal para o dia a dia, treinos na academia,passeios ao ar livre ou momentos de lazer.\n O top apresenta um design moderno, com detalhe vazado no centro e alças largas estampadas com a palavra LOVE, proporcionando um toque fashion e jovial.\n O tecido canelado se ajusta bem ao corpo, garantindo conforto e sustentação sem abrir mão da elegância. O short acompanha o mesmo material canelado, oferecendo um caimento justo e confortável. Possui detalhes em branco nas laterais e na barra, além de um cordão ajustável na cintura, permitindo um ajuste perfeito ao corpo. A modelagem esportiva garante liberdade de movimento, tornando-o uma peça essencial no guarda-roupa feminino.`
            )
          }
        />
        {descriçao ? <Text>{descriçao}</Text> : null}
        <Text style={styles.text_parecidos}>Modelos parecidos:</Text>
        <View style={styles.imag_3}>
          <Image
            source={{
              uri: "https://i.pinimg.com/736x/bd/2b/5e/bd2b5edabdbf4785bdad3c32e4795c07.jpg",
            }}
            style={styles.imag_2}
          />
          <Image
            source={{
              uri: "https://somosgg.com.br/wp-content/uploads/2022/09/c8032d87-c78b-4c12-b415-2bde4debf395.jpg",
            }}
            style={styles.imag_2}
          />
        </View>
        <View style={styles.imag_3}>
          <Image
            source={{
              uri: "https://ae01.alicdn.com/kf/S5959ffe95ada4d0f880ddaa0b495e781g/Wmstar-plus-size-roupas-femininas-shorts-saias-carga-camuflagem-casual-sexy-moda-nova-mini-cal-as.jpg",
            }}
            style={styles.imag_2}
          />
          <Image
            source={{
              uri: "https://m.media-amazon.com/images/I/51tfwNvskvL._AC_SY1000_.jpg",
            }}
            style={styles.imag_2}
          />
        </View>
        <View style={styles.imag_3}>
          <Image
            source={{
              uri: "https://cdn.awsli.com.br/1538/1538522/produto/217780514/whatsapp-image-2023-05-19-at-11-25-47-ilhxlis4ty.jpeg",
            }}
            style={styles.imag_2}
          />
          <Image
            source={{
              uri: "https://ae01.alicdn.com/kf/H9924898918d04cc4b10c395e0d9d22c2U.jpg_640x640Q90.jpg_.webp",
            }}
            style={styles.imag_2}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0F8FF",
  },
  imag_1: {
    width: 400,
    height: 400,
    borderRadius: 10,
  },
  imag_2: {
    width: 100,
    height: 100,
    margin: 10,
  },
  imag_3: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderRadius: 10,
  },
  tamanho: {
    margin: 10,
    backgroundColor: "#D3D3D3",
    textAlign: "center",
    padding: 5,
    borderRadius: 100,
    height: 40,
    width: 50,
  },
  text_parecidos: {
    fontSize: 18,
    padding: 8,
    backgroundColor: "#F5F5F5",
    borderRadius: 5,
    marginTop: 5,
    marginRight: 185,
    marginLeft: 8,
  },
});
