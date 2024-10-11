import { View, Text, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import CerradoCircleScreen from '../../../../components/MataCircleScreen'

export default function mataAtlantica() {
  return (
    <ImageBackground source={require('../../../../images/mataAtlantica/mata.jpg')} resizeMode="cover" style={{ flex: 1 }}>
      <ScrollView style={{padding: 5}}>
        <CerradoCircleScreen/>
      </ScrollView>
    </ImageBackground>
  )
}