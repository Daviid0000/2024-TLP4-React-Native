// import { Text, View, Image, Button, TextInput, ScrollView, Dimensions } from 'react-native';
// import { ScaledSheet } from 'react-native-size-matters';
// import React, { useEffect, useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
// import barra2 from '../assets/barra2.png'
// import barra3 from '../assets/barra3.jpg'
// import barra4 from '../assets/barra4.png'

// const Screen1 = () => {

//     const navigation = useNavigation();

//     const [images, setImages] = useState([barra2, barra3, barra4]);

   

   
//     const removeImage = (index) => {
//         const newImages = [...images];
//         newImages.splice(index, 1);
//         setImages(newImages);
//     };

//     useEffect(() => {
//         console.log('Incrementado!')
//     });

    
//     return (
//         <View style={styles.container}>
//             <ScrollView
//                 keyboardShouldPersistTaps='always'
//                 contentContainerStyle={styles.scrollContent}
//                 scrollEnabled={false}>
//                 <Text style={styles.text}>Lista de imágenes</Text>
//                 <View style={styles.imageContainer}>
//                     {images.map((image, index) => (
//                     <Image key={index} source={image} style={styles.image}/>))}
//                 </View>
//                 <Button title='Imagenes de gatos' onPress={() => navigation.navigate('OtraVentana')}></Button>
//                 <Button title="Eliminar" onPress={() => removeImage(index)} />
//             </ScrollView>
//         </View>
//     );
// }

// const styles = ScaledSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'rgba(255, 245, 214, 0.4)',
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginTop: '30@ms',
//     },
//     text: {
//         fontSize: '30@s',
//         textAlign: 'center',
//     },
//     scrollContent: {
//         flexGrow: 1,
//         paddingBottom: '10@vs',
//     },
//     image: {
//         width:200,
//         height:200,
//         marginBottom: '10@vs'
//     },
//     imageContainer: {
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         justifyContent: 'center',
//         paddingHorizontal: '5@s',
//     },
// });

// export default Screen1;

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

    const removeImage = (index) => {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
    };

    useEffect(() => {
        console.log('Incrementado!');
    }, []);

    const DATOS = [
        {
            nombre: 'gato montes',
            descripcion:'Gato con rayas negras, ojos amarillos, esponjocito, se sabe sentar.',
            img: gato1,
        },
        {
            nombre: 'gato silvestre',
            descripcion:'Gato marrón, con mirada de maleante, es desconfiado y le cuesta adaptarse a nuevos ambientes.',
            img: gato2,
        },
        {
            nombre: 'gato alvino',
            descripcion:'Gato gris, tranquilo, duerme mucho, come mucho, le gustan las caricias en su barriga.',
            img: gato3,
        },
        {
            nombre: 'gato negro',
            descripcion:'Gato que parece tigre, le gusta bañarse, ver novelas, comer saludable y jugar algo tranquilo.',
            img: gato4,
        }
    ]
    const Item = ({ title, img, descripcion }) => (
        <View style={styles.imageContainer}>
            <Text>{title}</Text>
            <Text>{descripcion}</Text>

            <Image style={styles.image} source={img} />
            
             <Button title="Adoptar" onPress={() => removeImage(index)} /> 
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
                data={DATOS}
                renderItem={({item}) => <Item title={item.nombre} descripcion={item.descripcion} img={item.img} />}
            />
        </>
    );
};

const styles = ScaledSheet.create({
    container: {
        marginTop: '30@ms',
        alignItems:'center',
        marginBottom: '10@vs'
    },
    text: {
        fontSize: '30@s',
        textAlign:'center'

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
        paddingHorizontal: '5@s',
        alignContent:'center',
        alignItems:'center'
    },
    scrollContainer: {
        flexGrow: 1,
    },
});

export default Screen1;
