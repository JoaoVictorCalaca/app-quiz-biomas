import { StyleSheet, Text, Touchable, View, TouchableOpacity, StatusBar, ScrollView } from "react-native";
import { appColors } from "../../util/colors";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar />

      <Text style={styles.h1}>Quiz de biomas brasileiros</Text>

      <Link href={'/game'} asChild>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Jogar!</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: appColors.defaultBlue,
    paddingHorizontal: 25,
    paddingVertical: 80,
    gap: 80
  },

  h1: {
    fontSize: 38,
    fontWeight: 'bold',
    color: appColors.defaultWhite,
    textAlign: 'center',
    width: '90%'
  },

  h2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: appColors.defaultWhite,
    alignSelf: 'flex-start'
  },

  btn: {
    backgroundColor: appColors.defaultGreen,
    height: 70,
    width: '100%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  btnText: {
    color: appColors.defaultWhite,
    fontWeight: 'bold',
    fontSize: 40
  },
})
