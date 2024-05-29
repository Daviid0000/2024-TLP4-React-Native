import { Text, View,Image, Button, FlatList } from 'react-native';
import { Stack } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import gato1 from '../assets/images/gatos/gato1.jpg'
import gato2 from '../assets/images/gatos/gato2.png'
import gato3 from '../assets/images/gatos/gato3.jpg'
import gato4 from '../assets/images/gatos/gato4.jpg'
import { StylesAdoptarGatos } from './Styles';

const Screen1 = () => {
    const navigation = useNavigation();
    const [images, setImages] = useState([]);

    const eliminarImagen = (id) => {
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
        <View key={id} style={StylesAdoptarGatos.imageContainer}>
                <Text style={StylesAdoptarGatos.title}>{nombre}</Text>
                <Text style={StylesAdoptarGatos.textDescription}>{descripcion}</Text>
            <Image style={StylesAdoptarGatos.image} source={img} />
            
             <Button title="Adoptar" onPress={() => eliminarImagen(id)} /> 
        </View>
    )

    return(
        <>
        <Stack.Screen options={{title:"Gatos"}} />
            <View style={StylesAdoptarGatos.container}> 
                <Button title="Adoptar perros" onPress={() => navigation.navigate('AdoptarPerros')} />                    
                <Button title="Home" onPress={() => navigation.navigate('Home')} />                    
            </View>  

            <FlatList 
                data={images}
                renderItem={({item}) => <Item {...item} />}
                keyExtractor={(item) => item.id.toString()}
            />
        </>
    );
};

export default Screen1;
