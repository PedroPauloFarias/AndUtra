import React, { Component } from "react";
import { View, Text, Image, Platform } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
    };
  }
  render() {
    let nome = " Feminino";
    return (
      <View style={{ marginTop: 10 }}>
        {/* <Image
          source={require("./assets/logoum.png")}
          style={{ width:30, height:30 }}
        /> */}
        <Text
          style={{ color: "#000000", fontSize: 30, marginTop: 15, margin: 8 }}
        >
          AndUtra
        </Text>
        <Text
          style={{
            fontFamily: Platform.select({
              android: "Inter_900Black",
              ios: "Inter-Black",
            }),
          }}
        ></Text>
        <Text style={{ fontSize: 18, margin: 10 }}>{nome} </Text>
        <Jobs
          largura1={350}
          altura1={200}
          altura2={65}
          marge={50}
          preenchimento={35}
          //margemaesquerda={10}
          margemsuperior={20}
          raiosuperioresquerdo={10}
          raiosuperiordireito={10}
          raioinferioresquerdo={10}
          raioinferiordireito={10}
          corfundo={"#DCDCDC"}
          preenchimentoinferior={15}
        />
      </View>
    );
  }
}

export default App;

class Jobs extends Component {
  render() {
    let img_1 =
      "https://i.pinimg.com/736x/f8/ba/0b/f8ba0b02170900f52e9734ca750904bd.jpg";
    let img_2 = require("./assets/modeloum.jpg");
    let img_3 =
      "https://i.pinimg.com/736x/1d/dd/8a/1ddd8a2d27ef431bfff903972e7eb9dd.jpg";
    let img_4 = require("./assets/modelodois.jpg");
    // let img_5 = require("./assets/logoum.png");

    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          source={img_2}
          style={{
            height: this.props.altura1,
            width: this.props.largura1,
            //marginLeft: this.props.margemaesquerda,
            marginTop: this.props.margemsuperior,
            borderTopLeftRadius: this.props.raiosuperioresquerdo,
            borderTopRightRadius: this.props.raiosuperiordireito,
            backgroundColor: this.props.corfundo,
            resizeMode: "stretch",
          }}
        />
        <Text
          style={{
            height: this.props.altura2,
            width: 350,
            // marginLeft: this.props.margemaesquerda,
            backgroundColor: this.props.corfundo,
            borderBottomRightRadius: this.props.raioinferiordireito,
            borderBottomLeftRadius: this.props.raioinferioresquerdo,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Modelo: Conjunto {"\n"}
          Cor: Azul {"\n"}
          Tamanhos: P ao G {"\n"}
        </Text>
        <Image
          source={img_4}
          style={{
            height: this.props.altura1,
            width: this.props.largura1,
            //marginLeft: this.props.margemaesquerda,
            marginTop: this.props.margemsuperior,
            borderTopLeftRadius: this.props.raiosuperioresquerdo,
            borderTopRightRadius: this.props.raiosuperiordireito,
            backgroundColor: this.props.corfundo,
            resizeMode: "stretch",
          }}
        />
        <Text
          style={{
            height: this.props.altura2,
            width: 350,
            // marginLeft: this.props.margemaesquerda,
            backgroundColor: this.props.corfundo,
            borderBottomRightRadius: this.props.raioinferiordireito,
            borderBottomLeftRadius: this.props.raioinferioresquerdo,
            textAlign: "0",
          }}
        >
          Modelo: Vestido {"\n"}
          Cor: Preto com branco {"\n"}
          Tamanhos: P ao G
        </Text>
      </View>
    );
  }
}
