import { View, Text, Button, FlatList, Image } from "react-native"
import { ScaledSheet } from "react-native-size-matters"
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from "react";


const OtraVentana = () => {



// const styles = ScaledSheet.create({
//     container: {
//         marginTop: '50@ms',
//         alignItems:'center'
//     },
//     text: {
//         fontSize: '30@s',
//         textAlign: 'center',
//         marginBottom:'10@ms'
//     },
//     image: {
//         width: 200,
//         height:200
//     },
//     imageContainer: {
//         alignContent:'center',
//         alignItems:'center',
//         marginBottom: '10@vs',
//         backgroundColor: '#039',
//         paddingHorizontal: 50,
//         paddingVertical:10,
//         marginHorizontal: 50,
//         marginVertical:10,
//         borderRadius: 10,
//         opacity:0.8
//     },
//     textDescription: {
//         color: '#fff',
//         textAlign: 'center',
//         fontSize: 15

//     },
//     title:{
//         color: '#fff',
//         textDecorationLine: 'underline',
//         textAlign: 'center',
//         fontSize: 20
//     }
// });

const [images, setImages] = useState([]);

useEffect(() => {
  const fetchImages = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breed/pug/images');
      const data = await response.json();
      setImages(data.message);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  fetchImages();
}, []);

const renderItem = ({ item }) => (
    
  <View>
    <Image
    source={{ uri: item }}
    style={{ width: 200, height: 200, marginBottom: 10 }}
  />
  </View>
);

return (
  <View>
    <Text>Adoptar perros</Text>
    <FlatList
      data={images}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  </View>  
);
}

export default OtraVentana