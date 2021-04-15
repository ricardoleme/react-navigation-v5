import React from 'react'
import {View, Text} from 'react-native'
import { withTheme } from 'react-native-paper'

function Sobre({route, theme}){
    const { colors } = theme
    return(
        <View>
            <Text style={{color: colors.text}}>Versão atual do App: {route.params?.versao}</Text>
        </View>
    )
}

export default withTheme(Sobre)