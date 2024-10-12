import { View, Text, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import PantanalCircleScreen from '../../../components/PantanalCircleScreen'
import { appColors } from '@/src/util/colors'

export default function Pantanal() {
  return (
    // <ImageBackground source={require('../../../images/pantanal/pantanal.jpg')} resizeMode="cover" style={{ flex: 1 }}>
    //   <ScrollView style={{padding: 5}}>
    //     <PantanalCircleScreen/>
    //   </ScrollView>
    // </ImageBackground>

    <ScrollView style={{ flex: 1, backgroundColor: appColors.defaultBlue }} contentContainerStyle={{ padding: 15 }}>
      <PantanalCircleScreen />
    </ScrollView>
  )
}

