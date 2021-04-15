import React from 'react'
import {View, Text} from 'react-native'

export default function Sobre({route}){
    return(
        <View>
            <Text>Versão atual do App: {route.params?.versao}</Text>
        </View>
    )
}