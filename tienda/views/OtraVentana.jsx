import { View, Text, Button } from "react-native"
import { ScaledSheet } from "react-native-size-matters"
import { useNavigation } from '@react-navigation/native';


const OtraVentana = () => {

    const navigation = useNavigation();


    return(
        
        <>
            <View>
                <Text style={styles.text}>
                    Hola
                </Text>
                <Button title='Imagenes de gráficos' onPress={() => navigation.navigate('home')}></Button>
            </View>
        </>
    )
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
});
export default OtraVentana