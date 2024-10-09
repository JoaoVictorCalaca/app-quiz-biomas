import { View, Text, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import CircleScreen from '../../components/CircleScreen'

const learn = () => {
  return (
    <ImageBackground source={require('../../images/cerrado/cerrado.jpg')} resizeMode="cover" style={{ flex: 1 }}>
      <ScrollView style={{padding: 5}}>
        <CircleScreen />
      </ScrollView>
    </ImageBackground>
  )
}

export default learn