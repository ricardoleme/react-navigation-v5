import React from 'react'
import {View, Text, Button} from 'react-native'
import { withTheme} from 'react-native-paper'

function Home({navigation, theme}){
    const { colors } = theme
    return(
        <View style={{ backgroundColor: colors.surface}}>
            <Text>Início</Text>
            <Button 
            title="Sobre o App"
            color={colors.accent}
            onPress={()=> navigation.navigate('Sobre',{ versao: '1.0.1'})}
            />
        </View>
    )
}

export default withTheme(Home)