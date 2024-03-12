import React from "react";
import { Button, Text, View } from "react-native";
import Estilo from './estilo'

export default props =>{
    let num1 = props.num1
    let num2 = props.num2

    function somar(){
        
        console.warn(num1 + num2)
    
    }
    

    return (
        <View>
            <Text style={Estilo.txtG}>Soma valores</Text>
            <Text style={Estilo.txtG}>Número 01</Text>
            <Text style={Estilo.txtG}>{num1}</Text>
            <Text style={Estilo.txtG}>Número 02</Text>
            <Text style={Estilo.txtG}>{num2}</Text>
            <Button
                title="Somar"
                onPress={somar}
                />
            <Text style={Estilo.txtG}>Resposta</Text>
            <Text style={Estilo.txtG}>{0}</Text>
        </View>
    )
}