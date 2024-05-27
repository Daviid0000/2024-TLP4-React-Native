import { useState } from "react"

const UploadImage = () => {
    const [selectedImage, setselectedImage] = useState(null)
    
    const pickImage = async () => {
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
    
      const uploadImage = async (imageUri) => {
        const uploadImageUrl = await UploadToClaudinary(imageUri)
        if(uploadImageUrl) {
          console.log("Imagen subida a claudinary: ", uploadImageUrl)
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