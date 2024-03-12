import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";
import Estilo from './estilo'

export default props =>{
    const [text,onChangeText] = useState('')
    const [number,onChangeNumber] = useState('') 

    return(
        <SafeAreaView>
            <Text style={Estilo.txtG}>Entrada de texto</Text>
            <TextInput 
                style={style.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Insira um texto"
                maxLength={50}
            />
            <TextInput
                style={style.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Insira um número válido"
                keyboardType="numeric"
                maxLength={20}

            />

        </SafeAreaView>
    )
}

const style = StyleSheet.create(
    {
        input:{
            width:250,
            height: 40,
            margin: 1,
            borderWidth: 1,
            padding:10,
        }
    }
)