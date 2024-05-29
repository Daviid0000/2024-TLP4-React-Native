import { useState } from "react"

const UploadImage = () => {
    const [selectedImage, setselectedImage] = useState(null)
    
    const pickImage = async () => {
      try {

        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          aspect: [4,3],
          quality: 1
        })
        console.log(result)
        if(!result.canceled){
          setselectedImage(result.assets[0].uri)
          uploadImage(result.assets[0].uri)
        }
        
      } catch (error) {
        console.error('Error al seleccionar la imagen:', error)
      }

    
      const uploadImage = async (imageUri) => {
        try {
          
          const uploadImageUrl = await UploadToClaudinary(imageUri)
          if(uploadImageUrl) {
            console.log("Imagen subida a claudinary: ", uploadImageUrl)
          }
          
        } catch (error) {
          console.log("Error al subir la imagen a Claudinary:", error)
        }
      }
    }
    
    return(
        <>
            <Button title="Subir imagen" onPress={pickImage}/>      
            {selectedImage && (
              <Image source={{uri: selectedImage}} />
            )}
        
        </>
    )

}

export default UploadImage