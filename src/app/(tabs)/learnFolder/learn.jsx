import { View, Text, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import PantanalCircleScreen from '../../../components/PantanalCircleScreen'

const learn = () => {
  return (
    <ImageBackground source={require('../../../images/pantanal/pantanal.jpg')} resizeMode="cover" style={{ flex: 1 }}>
      <ScrollView style={{padding: 5}}>
        <PantanalCircleScreen/>
      </ScrollView>
    </ImageBackground>
  )
}

export default learn