import { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";

export default function Arrow(props) {
    const { angulation, direction, arrowSize, interaction } = props;

    // Cria uma referência animada para o tamanho da seta
    const animatedSize = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Sempre que arrowSize mudar, faz a animação para o novo valor
        Animated.timing(animatedSize, {
            toValue: arrowSize,  // Tamanho final da seta
            duration: 200,       // Duração da animação em milissegundos
            useNativeDriver: false,  // Não usamos Native Driver para propriedades de layout
        }).start();
    }, [arrowSize]);

    const interactionTypes = {
        predatism: 'red',
        competition: 'orange',
        mutualism: 'green',
        comensalism: 'blue'
    };

    const interactionColor = interactionTypes[interaction] || 'black'

    const styles = StyleSheet.create({
        arrow: {
            position: 'absolute',
            zIndex: -1, // Z-index baixo para garantir que a seta fique atrás
            justifyContent: 'center',
            alignItems: 'center',
        },
        arrowRightSide: {
            right: Animated.multiply(animatedSize, -0.5),
        },
        arrowLeftSide: {
            left: Animated.multiply(animatedSize, 0.5), 
        },
        arrowBody: {
            width: 0,
            height: 0,
            borderRightWidth: animatedSize,  // Agora o tamanho é animado
            borderTopWidth: 5,
            borderTopColor: 'transparent',
            borderBottomWidth: 3,
            borderBottomColor: 'transparent',
            borderRightColor: interactionColor,
            transform: [{ rotate: `${angulation}deg` }],
            transformOrigin: 'left center',
        },
    });

    return (
        <View style={[styles.arrow]}>
            <Animated.View style={[styles.arrowBody, styles[`arrow${direction}`]]} />
        </View>
    );
}
