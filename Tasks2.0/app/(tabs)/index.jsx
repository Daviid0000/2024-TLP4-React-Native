import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import { Button, Icon } from '@rneui/themed';
import { Stack, router } from 'expo-router';
import Carousel from 'react-native-reanimated-carousel';


const { width } = Dimensions.get('window');

const data = [
  { id: 1, image: require('../../img/img1.jpg') },
  { id: 2, image: require('../../img/img2.jpg') },
];

export default function HomeScreen() {
  return (
    <>
      <View style={styles.container}>
        <Stack.Screen options={{ headerShown: false }} />
        <View style={styles.item}>
          <Image source={require('../../img/tutorialogo.png')} style={styles.image} />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Button
            buttonStyle={{ paddingHorizontal: 45, borderRadius: 20 }}
            title="Login"
            onPress={() => router.push("Login")}
          />
          <Icon name='menu' size={40} color={'#ddd'} />
        </View>
      </View>

      <Text style={{ fontSize: 50, textAlign: 'left', paddingLeft:10 }}>Stats Academy</Text>
      <Text style={{ fontSize: 30, textAlign: 'left', paddingLeft:10 }}>Aprendizaje en Estadística</Text>
      <Text style={{ fontSize: 22, textAlign: 'left', paddingLeft:10 }}>
        Descubre la manera más efectiva de aprender Estadística con nuestra tutoria personalizada
      </Text>
      <Button
        buttonStyle={{ paddingHorizontal: 15, borderRadius: 20, width: 120, margin: 10 }}
        title="COMENZAR"
        onPress={() => router.push("Login")}
        color={'#149'}
      />

<View>
        <Carousel
          loops
          width={width}
          height={300}
          autoPlay={true}
          data={data}
          scrollAnimationDuration={3000}
          renderItem={({ item }) => (
            <View>
              <Image source={item.image} style={{ width: 340, height: 200, margin: 10 }} />
            </View>
          )}
        />
      </View>

      {/* New View with Text */}
      <View style={styles.footer}>
        <Text style={{color:'#fff', fontSize: 30}}>FORMA PARTE</Text>
        <Button title="Únete ahora" color={'#149'}  />
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#31f',
    marginVertical: 40,
  },
  text: {
    color: '#fff',
  },
  item: {
    flexDirection: 'row',
    gap: 25,
    marginVertical: 10,
  },
  image: {
    width: 35,
    height: 35,
    marginHorizontal: 10,
  },
  footer: {
    backgroundColor: '#3f6',
    width: 340,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto', // Ensure it's pushed to the bottom
    marginHorizontal: 10,
    borderRadius: 5,
  },
});
