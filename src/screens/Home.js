import React from 'react'
import {View, Text, Button} from 'react-native'

export default function Home({navigation}){
    return(
        <View>
            <Text>Início</Text>
            <Button 
            title="Sobre o App"
            onPress={()=> navigation.navigate('Sobre',{ versao: '1.0.1'})}
            />
        </View>
    )
}