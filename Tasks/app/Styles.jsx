import { StyleSheet } from "react-native"


export const StylesLogin = StyleSheet.create({
    centeredView: {
      flex: 1,
      alignItems: 'center',
      marginTop: 42,
    },
    title: {
      fontSize: 30
    },
    subtitle: {
      fontSize: 20,
      borderBottomWidth: 2,
      borderColor: '#2231',
      padding: 10,
      margin: 10
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10
    },
    image: {
      width: 200,
      height: '50%'
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      fontSize: 20
    },
    button: {
      borderRadius: 20,
      paddingHorizontal:60
    }
})

export const StylesRegister = StyleSheet.create({
  container:{
    alignItems:'center',
    margin: 'auto'
  },
  input:{
    fontSize:20,
    width:300,
    borderBottomWidth:2,
    borderColor:'#2231',
    paddingVertical: 10
  },
  InputContainer:{
    display:'flex',
    flexDirection:'column',
    alignItems: 'flex-start'
  }
})