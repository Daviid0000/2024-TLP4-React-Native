import { StyleSheet } from "react-native"

export const StylesHome = StyleSheet.create({
    // Home
    container: {
        alignItems: 'center',
        margin:10,
        gap:10
    },
    title: {
        fontSize: 30,
        textAlign:'center'
    },
})

    // Index

    export const StylesLogin = StyleSheet.create({
      centeredView: {
        flex: 1,
        alignItems: 'center',
        marginTop: 22,
      },
      title: {
        fontSize: 30
      },
      subtitle: {
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 5,
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
})

export const StylesAdoptarGatos = StyleSheet.create({
  container: {
      marginTop: 50,
      alignItems:'center',
      marginBottom: 10
  },

  text: {
      fontSize: 30,
      textAlign:'center',
      marginBottom:10
  },

  image: {
      width: 200,
      height: 200,
      marginBottom: 10,
      borderWidth: 1
  },

  imageContainer: {
      textAlign:'center',
      flexWrap: 'wrap',
      alignContent:'center',
      alignItems:'center',
      backgroundColor: '#039',
      paddingHorizontal: 50,
      paddingVertical:10,
      marginHorizontal: 50,
      marginVertical:10,
      borderRadius: 10,
      opacity:0.8

  },

  textDescription: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 15

  },
  title:{
      color: '#fff',
      textDecorationLine: 'underline',
      textAlign: 'center',
      fontSize: 20
  }
});

export const StylesMyImages = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderWidth: 1
},

imageContainer: {
    textAlign:'center',
    flexWrap: 'wrap',
    alignContent:'center',
    backgroundColor: '#039',
    paddingHorizontal: 50,
    paddingVertical:10,
    marginVertical:10,
    borderRadius: 10,
    opacity:0.8,
    flexGrow: 1

},
})