import { View, Text } from "react-native"
import { ScaledSheet } from "react-native-size-matters"


export const Home = () => {

  return(

    <>
      <View style={styles.container}>
        <Text style={styles.text}>
          Hola Mundo  
        </Text>  
      </View> 
    </>
  
  )
}

const styles = ScaledSheet.create({
  container: {
    flex:1,
    backgroundColor: 'rgba(255, 245, 214, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '30@ms'
  },
  text: {
    fontSize: '30@s',
    borderBottomWidth: 1,
    borderColor: '#3f6',
    borderRadius: 5,
    padding: 5,
    color: '#3f6'
  },

})