export const uploadClaudinary = async (ImageUri) => {
 try {
    const cloudName = 'dqt0z6c3r';
    const unsinedUploadPreset = 'Imagenes';
    const apiUrl = '';

    const formData = new FormData()

    formData.append('file', {
        uri: ImageUri,
        type: 'image/jpg',
        name: 'Img'
    })

    formData.append('upload_preset', unsinedUploadPreset)

    const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData
    })

    if(response.ok){
        const data = await response.json()
        if(data.secure_url){
            const imagenUrl = data.secure_url
            console.log('Imagen subida a claudinary:', imagenUrl)
            return imagenUrl;
        } 
        else{
            console.log('Error al subir la imagen a Claudinary 1')
            return null
        }
    }
    else{
        console.log('Error al subir la imagen a Claudinary 2', response.status, response.statusText)
        return null
    }
 } catch (error) {
    console.log('Error al subir la imagen a Claudinary 3', error)
    return null
 }
}
