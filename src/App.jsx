import React from "react";
import { StyleSheet, View } from "react-native";


import EntradaTexto from "./components/EntradaTexto";
// import Entrada from "./components/Entrada";
// import SomaValores from "./components/SomaValores";

export default () =>{
    return (
        <View style={style.fundo}>
            <EntradaTexto />
            
            {/* <Entrada/>
            <SomaValores num1={500} num2={700}/> */}
        </View>
    )
}

const style = StyleSheet.create(
    {
        fundo:{
            flexGrow: 1,
            justifyContent:'center',
            alignItems: 'center'
        }
    }
)