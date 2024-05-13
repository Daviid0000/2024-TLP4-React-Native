import { View, Text, Button, FlatList, Image } from "react-native"
import { ScaledSheet } from "react-native-size-matters"
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from "react";


const OtraVentana = () => {

    const navigation = useNavigation();
    
    const [imagenes, setImagenes] = useState([]);
    
    useEffect(() => {
        const obtenerImagenes = async () => {
            const response = await fetch('https://dog.ceo/api/breed/pug/images');
            const data = await response.json();
            setImagenes(data.message);
          
        };

    obtenerImagenes();
    }, []);

    const Item = ({ item }) => (
    
        <View style={styles.imageContainer}>
            <Image
              source={{ uri: item }}
              style={styles.image}
            />
            <Button title="Adoptar"/>
        </View>
    );

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Adoptar perros</Text>
        <Button title="Adoptar gatos" onPress={() => navigation.navigate('home')} />                    
        <FlatList
          data={imagenes}
          renderItem={Item}
          keyExtractor={(index) => index.toString()}
        />
      </View>  
    );
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
        height:200,
        marginBottom:10
    },
    imageContainer: {
        alignContent:'center',
        alignItems:'center',
        backgroundColor: '#039',
        paddingHorizontal: 50,
        paddingVertical:10,
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