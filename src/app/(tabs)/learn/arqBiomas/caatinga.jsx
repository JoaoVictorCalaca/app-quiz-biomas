import { View, Text, FlatList, StyleSheet, Image, ScrollView } from 'react-native'
import { appColors } from "@/src/data/colors";
import React from 'react'
import { dataBiomas } from '../../../../data/dataBiomas'
import CircleScreen from '../../../../components/CaatingaCircleScreen'
export default function Cerrado() {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: appColors.defaultBlue,
    },
    section: {
      marginBottom: 24,
      backgroundColor: appColors.quaternaryBlue,
      padding: 16,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 5,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 12,
      color: '#fff',
    },
    description: {
      fontSize: 16,
      color: '#fff',
    },
    item: {
      fontSize: 16,
      color: '#fff',
      marginBottom: 8,
    },
    imageContainer: {
      alignItems: 'center',
      marginBottom: 24,
    },
    image: {
      width: '80%',
      height: 200,
      borderRadius: 8,
    },
  });

  const biomas = dataBiomas()
  const bioma = biomas[5]
  console.log(bioma)
  return (
    <ScrollView style={[styles.container, { padding: 5 }]}>

      <View style={styles.section}>
        <Text style={styles.title}>{bioma.title}</Text>
        <Text style={styles.description}>{bioma.text}</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('../../../../images/caatinga/caatinga.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>CARACTERÍSTICAS</Text>
        {bioma.caracteristicas.map((item, index) => (
          <Text key={index.toString()} style={styles.item}>- {item}</Text>
        ))}
      </View>
      <View style={styles.section}>
        <CircleScreen />
      </View>
    </ScrollView>

  )
}