import { View, Text, Button, FlatList, Image } from "react-native"
import { ScaledSheet } from "react-native-size-matters"
import { useNavigation } from '@react-navigation/native';
import perro1 from '../assets/perros/perro1.jpg'
import perro2 from '../assets/perros/perro2.jpg'
import perro3 from '../assets/perros/perro3.jpg'
import perro4 from '../assets/perros/perro4.jpg'


const OtraVentana = () => {

    const navigation = useNavigation();


    const DATOS = [
        {
            nombre: 'Perro1',
            descripcion:'Desc1',
            img: perro1,
        },
        {
            nombre: 'Perro2',
            descripcion:'Desc2',
            img: perro2,
        },
        {
            nombre: 'Perro 3',
            descripcion:'Desc3',
            img: perro3,
        },
        {
            nombre: 'Perro 4',
            descripcion:'Desc4',
            img: perro4,
        }
    ]

    const Item = ({nombre, descripcion, img}) => {
        <View>
            <Text>{nombre}</Text>
            <Text>{descripcion}</Text>
            
            <Image style={styles.image} source={img}/>
        </View>
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
                renderItem={({item}) => <Item nombre={item.nombre} descripcion={item.descripcion} img={item.img} />}
            />
        </>
    )
}


const styles = ScaledSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '30@ms',
    },
    text: {
        fontSize: '30@s',
        textAlign: 'center',
    },
    image: {
        width: 200,
        height:200
    }
});
export default OtraVentana