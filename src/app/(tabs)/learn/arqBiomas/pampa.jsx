import { View, Text, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import CerradoCircleScreen from '../../../../components/PampaCircleScreen'

export default function Pampa() {
  return (
    <ImageBackground source={require('../../../../images/pampa/pampa.png')} resizeMode="cover" style={{ flex: 1 }}>
      <ScrollView style={{padding: 5}}>
        <CerradoCircleScreen/>
      </ScrollView>
    </ImageBackground>
  )
}