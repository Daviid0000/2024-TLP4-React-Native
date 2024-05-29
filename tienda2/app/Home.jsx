import React, { useState } from 'react';
import { Button, Text, View, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StylesHome } from './Styles';
import * as ImagePicker from 'expo-image-picker'
import { uploadClaudinary } from './Upload.claudinary';
import { StylesMyImages } from './Styles';

const Home = () => {
    const navigation = useNavigation();

    const [images, setImages] = useState([]);
    
    const pickImage = async () => {
      try {

        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          aspect: [4,3],
          quality: 1
        })
        console.log(result)
        if(!result.canceled){
          const uploadImageUrl = await uploadImage(result.assets[0].uri)
          if(uploadImage){
            setImages([...images, uploadImageUrl])
          }
        }
        
      } catch (error) {
        console.error('Error al seleccionar la imagen:', error)
      }

    }

    const uploadImage = async (imageUri) => {
      try {
        
        const uploadImageUrl = await uploadClaudinary(imageUri)
        if(uploadImageUrl) {
          console.log("Imagen subida a claudinary: ", uploadImageUrl)
          return uploadImageUrl
        }
        
      } catch (error) {
        console.log("Error al subir la imagen a Claudinary:", error)
        return null
      }
    }

    return (
        <View style={StylesHome.container}>
            <Stack.Screen options={{title: "Home Page"}} />

            <Text style={StylesHome.title}>Sube fotos de tus animales favoritos</Text>
            <Button title='Adoptar Gatos' onPress={() => navigation.navigate("AdoptarGatos")}/>
            <Button title='Adoptar Perros' onPress={() => navigation.navigate("AdoptarPerros")}/>
            <Button title='Subir imagen' onPress={pickImage} />
            

            <ScrollView style={StylesMyImages.imageContainer}>
                {images.map((imageUrl, index) => (
                    <Image key={index} source={{uri: imageUrl}} style={StylesMyImages.image} />
                ))}
            </ScrollView>
        </View>
    );
}


export default Home;
