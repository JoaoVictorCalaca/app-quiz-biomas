import { appColors } from "@/src/util/colors";
import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Aprenda um pouco sobre a fauna e flora de cada bioma!</Text>

            <Link href="learn/arqBiomas/pantanal" asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Pantanal</Text>
                    <AntDesign name="rightcircle" size={24} color="white" />
                </TouchableOpacity>
            </Link>
            <Link href="learn/arqBiomas/cerrado" asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Cerrado</Text>
                    <AntDesign name="rightcircle" size={24} color="white" />
                </TouchableOpacity>
            </Link>
            <Link href="learn/arqBiomas/pampa" asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Pampa</Text>
                    <AntDesign name="rightcircle" size={24} color="white" />
                </TouchableOpacity>
            </Link>
            <Link href="learn/arqBiomas/mataAtlantica" asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Mata Atlântica</Text>
                    <AntDesign name="rightcircle" size={24} color="white" />
                </TouchableOpacity>
            </Link>
            <Link href="learn/arqBiomas/caatinga" asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Caatinga</Text>
                    <AntDesign name="rightcircle" size={24} color="white" />
                </TouchableOpacity>
            </Link>
            <Link href="learn/arqBiomas/amazonia" asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Amazônia</Text>
                    <AntDesign name="rightcircle" size={24} color="white" />
                </TouchableOpacity>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: appColors.defaultBlue,
        paddingHorizontal: 25,
        paddingVertical: 50,
        gap: 30
    },

    h1: {
        fontSize: 28,
        fontWeight: 'bold',
        color: appColors.defaultWhite,
        textAlign: 'center',
        width: '90%'
    },

    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: '100%',
        backgroundColor: appColors.defaultGreen,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    text: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold'
    }
})