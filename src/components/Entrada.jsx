import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default props =>{
    const [text,setText] = useState('')

    return (
        <View style={{padding: 10}}>
            <TextInput
                style={{height: 40}}
                placeholder="Insira seu nome"
                onChangeText={
                    newtText => setText(newText)}
                defaultValue={text}
            />

            <Text style={{padding: 10, fontSize: 42}}>
                {
                    text
                    .split( ' ' )
                    .map(word => word && 'pizza')
                    .join('')
                }
            </Text>
        </View>
    )
}