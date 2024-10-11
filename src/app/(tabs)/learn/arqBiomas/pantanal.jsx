import { View, Text, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import PantanalCircleScreen from '../../../../components/PantanalCircleScreen'

export default function Pantanal() {
  return (
    <ImageBackground source={require('../../../../images/pantanal/pantanal.jpg')} resizeMode="cover" style={{ flex: 1 }}>
      <ScrollView style={{padding: 5}}>
        <PantanalCircleScreen/>
      </ScrollView>
    </ImageBackground>
  )
}

