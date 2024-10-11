import { Animated, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Arrow from './Arrow';
import { images } from '../data/PantanalData';
import { useRef, useState } from "react";

export default function PantanalCircleScreen() {
    const { width, height } = Dimensions.get('window');
    const circleSize = Math.min(width, height) * 0.9;
    const radius = circleSize / 2;
    const elementRadius = radius - 35;

    const [selectedImage, setSelectedImage] = useState(null);
    const imageSizes = useRef(images(radius).reduce((acc, image) => {
        acc[image.id] = new Animated.Value(70)
        return acc
    }, {})).current;

    const handleImagePress = (id) => {
        
        if (selectedImage !== id) {
            // Anima a imagem previamente selecionada para diminuir de tamanho (se houver uma selecionada)
            if (selectedImage !== null) {
                Animated.timing(imageSizes[selectedImage], {
                        toValue: 70, // Tamanho original
                        duration: 200,
                        useNativeDriver: false,
                    }).start();
                }
                
                // Seleciona a nova imagem e a anima para aumentar de tamanho
                setSelectedImage(id);
                
                Animated.timing(imageSizes[id], {
                    toValue: 90, // Tamanho maior quando selecionada
                    duration: 200,
                    useNativeDriver: false,
                }).start();
            }else {
                setSelectedImage(selectedImage === id ? null : id);
            
                Animated.timing(imageSizes[id], {
                    toValue: selectedImage === id ? 70 : 90,
                    duration: 200,
                    useNativeDriver: false,
                }).start()
            }
    };
    
    return (
        <View style={styles.container}>
            <View style={[styles.circle, { width: radius * 2, height: radius * 2 }]}>
                {images(radius).map((image, index) => {
                    const angle = (index * 2 * Math.PI) / images(radius).length;
                    const x = elementRadius * Math.cos(angle);
                    const y = elementRadius * Math.sin(angle);

                    const imageSize = imageSizes[image.id] || 70;

                    return (
                        <View
                            key={index}
                            style={[
                                styles.element,
                                {
                                    transform: [
                                        { translateX: x },
                                        { translateY: y },
                                    ],
                                },
                            ]}
                        >
                            <TouchableOpacity onPress={() => handleImagePress(image.id)}>
                                <Animated.Image
                                    source={image.source}
                                    style={[
                                        styles.image,
                                        {
                                            width: imageSize,
                                            height: imageSize,
                                            borderWidth: selectedImage === image.id ? 6 : 0,
                                            zIndex: 5, // Imagem com zIndex mais alto
                                        },
                                    ]}
                                />
                            </TouchableOpacity>

                            {selectedImage === image.id && image.relatedTo.length > 0 &&
                                image.relatedTo.map((relatedId, j) => (
                                    <Arrow
                                        key={j}
                                        angulation={image.arrowAngulation[j]}
                                        direction={image.arrowStart}
                                        arrowSize={image.arrowSize[j]}
                                        interaction={image.interactions[j]}
                                    />
                                ))}
                        </View>
                    );
                })}
            </View>

                <View style={[styles.label, styles.alignment]}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={[styles.alignment, {flexDirection: 'row'}]}>
                            <View style={{width: 10, height: 10, backgroundColor: 'red', marginHorizontal: 5}}/> 
                            <Text>Predatismo</Text>
                        </View>
                        <View style={[styles.alignment, {flexDirection: 'row'}]}>
                            <View style={{width: 10, height: 10, backgroundColor: 'orange', marginHorizontal: 5}}/> 
                            <Text>Competição</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={[styles.alignment, {flexDirection: 'row'}]}>
                            <View style={{width: 10, height: 10, backgroundColor: 'green', marginHorizontal: 5}}/> 
                            <Text>Mutualismo</Text>
                        </View>
                        <View style={[styles.alignment, {flexDirection: 'row'}]}>
                            <View style={{width: 10, height: 10, backgroundColor: 'blue', marginHorizontal: 5}}/> 
                            <Text>Comensalismo</Text>
                        </View>
                    </View>
                </View>

            <View style={styles.textBox}>
                <Text style={styles.title}>
                    {images(radius)[selectedImage - 1] ? images(radius)[selectedImage - 1].animal : 'Selecione um animal'}
                </Text>
                
                {
                    images(radius)[selectedImage - 1] ? (
                        <Text style={styles.text}>
                            {images(radius)[selectedImage - 1].description}
                        </Text>
                    ) : ''
                }
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },

    circle: {
        borderRadius: 9999, // Arredondamento total
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginTop: '10%',
        marginBottom: -20
    },

    element: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        borderRadius: 50,
        borderColor: '#9fc7d4',
        borderRadius: 999,
    },

    textBox: {
        padding: '5%',
        width: '100%',
        backgroundColor: 'rgba(14, 1, 51, 0.8)',
        borderRadius: 10
    },

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    },

    text: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
        textAlign: 'left'
    },

    alignment: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    label: {
        width: '70%',
        padding: '2%',
        backgroundColor: 'rgba(256, 256, 256, 0.8)',
        borderRadius: 10,
        marginVertical: '5%'
    }
});
