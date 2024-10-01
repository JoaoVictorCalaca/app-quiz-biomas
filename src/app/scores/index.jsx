import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { appColors } from '@/src/util/colors'

const scores = () => {
  return (
    <View style={styles.container}>
      <Text>scores</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.defaultBlue,
    justifyContent: 'space-around',
    padding: 25,
  },
})

export default scores