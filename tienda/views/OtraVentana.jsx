import { View, Text, Button, FlatList, Image } from "react-native"
import { ScaledSheet } from "react-native-size-matters"
import { useNavigation } from '@react-navigation/native';
import perro1 from '../assets/perros/perro1.jpg'
import perro2 from '../assets/perros/perro2.jpg'
import perro3 from '../assets/perros/perro3.jpg'
import perro4 from '../assets/perros/perro4.jpg'
import { useEffect, useState } from "react";


const OtraVentana = () => {

    const navigation = useNavigation();

    const api = "https://swapi.dev/api/people"

    useEffect(() => {
        fetch(api)
        .then((res) => res.json())
        .then((data) => { setImgPerro(data.results[0])
            }   
        )
    },[])

    const [imgPerro, setImgPerro] = useState()
    const nombres = imgPerro
    console.log("imagen perro:",nombres)

    const DATOS = [
        {
            nombre: 'Perro Lobo',
            descripcion:'Blanco con gris, amigable, jugueton, come mucho, duerme en las camas.',
            img: perro1,
        },
        {
            nombre: 'Perro Peluche',
            descripcion:'Chiquito, nunca crece, jugueton, necesita mucha atención, mucha comida, mucho amor.',
            img: perro2,
        },
        {
            nombre: 'Perro Básico',
            descripcion:'Negro, obediente, miedoso, no come mucho, dale un hueso y puchero y está contento.',
            img: perro3,
        },
        {
            nombre: 'Perro vaca',
            descripcion:'2X1 Parecen vacas pero son perros blancos con manchas negras, macho y hembra, pareja.',
            img: perro4,
        }
    ]

    const Item = ({nombre, descripcion, img}) => {
        return(
            <View style={styles.imageContainer}>
                    <Text style={styles.title} >{nombre}</Text>
                    <Text style={styles.textDescription} >{descripcion}</Text>
            <Image style={styles.image} source={img}/>
        </View>
        )
    }

    return(
        <>
            <View style={styles.container}>
                <Text style={styles.text}>
                    Adoptar Perros
                </Text>
                <Button title='Adoptar gatos' onPress={() => navigation.navigate('home')} />
            </View>

            <FlatList 
                data={DATOS} 
                renderItem={({item}) => <Item nombre={nombres.name} descripcion={item.descripcion} img={item.img} />}
            />
        </>
    )
}


const styles = ScaledSheet.create({
    container: {
        marginTop: '50@ms',
        alignItems:'center'
    },
    text: {
        fontSize: '30@s',
        textAlign: 'center',
        marginBottom:'10@ms'
    },
    image: {
        width: 200,
        height:200
    },
    imageContainer: {
        alignContent:'center',
        alignItems:'center',
        marginBottom: '10@vs',
        backgroundColor: '#039',
        paddingHorizontal: 50,
        paddingVertical:10,
        marginHorizontal: 50,
        marginVertical:10,
        borderRadius: 10,
        opacity:0.8
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
export default OtraVentana