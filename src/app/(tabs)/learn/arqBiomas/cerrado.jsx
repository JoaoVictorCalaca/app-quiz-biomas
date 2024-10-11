import { View, Text, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import CerradoCircleScreen from '../../../../components/CerradoCircleScreen'

export default function Cerrado() {
  return (
    <ImageBackground source={require('../../../../images/cerrado/cerrado.jpg')} resizeMode="cover" style={{ flex: 1 }}>
      <ScrollView style={{padding: 5}}>
        <CerradoCircleScreen/>
      </ScrollView>
    </ImageBackground>
  )
}