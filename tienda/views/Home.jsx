import { Text, View,Image, Button, FlatList } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import gato1 from '../assets/gatos/gato1.jpg'
import gato2 from '../assets/gatos/gato2.png'
import gato3 from '../assets/gatos/gato3.jpg'
import gato4 from '../assets/gatos/gato4.jpg'

const Screen1 = () => {
    const navigation = useNavigation();
    const [images, setImages] = useState([]);

    const removeImage = (id) => {
        setImages(prevImages => prevImages.filter(image => image.id !== id))
    };

    useEffect(() => {
        setImages([
            {
                id:1,
                nombre: 'gato montes',
                descripcion:'Gato con rayas negras, ojos amarillos, esponjocito, se sabe sentar.',
                img: gato1,
            },
            {
                id:2,
                nombre: 'gato silvestre',
                descripcion:'Gato marrón, con mirada de maleante, es desconfiado y le cuesta adaptarse a nuevos ambientes.',
                img: gato2,
            },
            {
                id:3,
                nombre: 'gato alvino',
                descripcion:'Gato gris, tranquilo, duerme mucho, come mucho, le gustan las caricias en su barriga.',
                img: gato3,
            },
            {
                id:4,
                nombre: 'gato negro',
                descripcion:'Gato que parece tigre, le gusta bañarse, ver novelas, comer saludable y jugar a algo tranquilo.',
                img: gato4,
            }
        ])
    }, []);

    
    const Item = ({ nombre, img, descripcion, id }) => (
        <View key={id} style={styles.imageContainer}>
                <Text style={styles.title}>{nombre}</Text>
                <Text style={styles.textDescription}>{descripcion}</Text>
            <Image style={styles.image} source={img} />
            
             <Button title="Adoptar" onPress={() => removeImage(id)} /> 
        </View>
    )

    return(
        <>
            <View style={styles.container}> 
                <Text style={styles.text}>
                    Adopta gatos
                </Text>
                <Button title="Adoptar perros" onPress={() => navigation.navigate('OtraVentana')} />                    
            </View>  

            <FlatList 
                data={images}
                renderItem={({item}) => <Item {...item} />}
                keyExtractor={(item) => item.id.toString()}
            />
        </>
    );
};

const styles = ScaledSheet.create({
    container: {
        marginTop: '50@ms',
        alignItems:'center',
        marginBottom: '10@vs'
    },
    text: {
        fontSize: '30@s',
        textAlign:'center',
        marginBottom:'10@ms'
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: '10@vs',
        borderWidth: 1
    },
    imageContainer: {
        textAlign:'center',
        flexWrap: 'wrap',
        alignContent:'center',
        alignItems:'center',
        backgroundColor: '#039',
        paddingHorizontal: 50,
        paddingVertical:10,
        marginHorizontal: 50,
        marginVertical:10,
        borderRadius: 10,
        opacity:0.8

    },
    scrollContainer: {
        flexGrow: 1,
    },
    textDescription: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 15

    },
    title:{
        color: '#fff',
        textDecorationLine: 'underline',
        textAlign: 'center',
        fontSize: 20
    }
});

export default Screen1;
