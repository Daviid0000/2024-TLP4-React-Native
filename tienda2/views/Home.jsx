import { Button, Text, View } from 'react-native';

export const Home = () => {

    return(
        <>
            <View>
                <Text>
                    Home Page
                </Text>
                <Button title='Adoptar Gatos'/>
                <Button title='Adoptar Perros'/>
            </View>
        </>
    )
}