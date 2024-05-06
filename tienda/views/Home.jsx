import { Text, View, Image, Button, TextInput, ScrollView, Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import barra2 from '../assets/barra2.png'
import barra3 from '../assets/barra3.jpg'
import barra4 from '../assets/barra4.png'

const Screen1 = () => {

    const navigation = useNavigation();

    const images = [
        barra2,
        barra3,
        barra4

    ]

    const numColumns = 3;
    const screenWidth = Dimensions.get('window').width;

    useEffect(() => {
        console.log('Incrementado!')
    });

    const renderImage = (image, index) => {
        return(
            <Image key={index} source={image} style={[styles.image, {width: screenWidth / numColumns}]}/>
        )
    }
    return (
        <View style={styles.container}>
            <ScrollView
                keyboardShouldPersistTaps='always'
                contentContainerStyle={styles.scrollContent}
                scrollEnabled={false}>
                <Text style={styles.text}>Lista de imágenes</Text>
                <View style={styles.imageContainer}>
                    {images.map((image, index) => (
                    <Image key={index} source={image} style={styles.image}/>))}
                </View>
                <Button title='Imagenes de gatos' onPress={() => navigation.navigate('OtraVentana')}></Button>
            </ScrollView>
        </View>
    );
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 245, 214, 0.4)',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '30@ms',
    },
    text: {
        fontSize: '30@s',
        textAlign: 'center',
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: '10@vs',
    },
    image: {
        width:200,
        height:200,
        marginBottom: '10@vs'
    },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingHorizontal: '5@s',
    },
});

export default Screen1;