export const List = () => {

  const [modalVisible, setModalVisible] = useState(false);

  const onPress = () => {
    alert('Comprado!')
    const colorButton = () => {
      styles.backgroundColor = '#3f6'
    }
    colorButton()
  }

  return (
    <>
    <View style={styles.container}>

      <View>
        <Text style={styles.texto}>Lista de compras</Text>
      </View>

      <View style={styles.flexing}>
        <Text>- Ferrari $7 pesos</Text>
        <Text>- Manzana dorada $10k pesos</Text>
        <Text>- Medio litro de gasolina en 30 cuotas de $150k pesos</Text>
        <Text>- Perro $0 pesos</Text>
        <Text>- Loro $23 pesos</Text>
        <Text>- Manao $8 pesos</Text>
      </View>

      <Modal
      animationType='slide'
      transparent={true}
      visible={modalVisible}
      onRequestClose={() =>  {
        Alert.alert('¡Comprado!');
      }}
      >

      </Modal>

      
      <StatusBar style="auto" />
    </View>
      <View style={{ margin:20}}>
        <Button title="Comprar" onPress={onPress} color={'#3f6'}/>
      </View>
    

    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    left:10,
    top:50

  },
  texto: {
    color: "#04f",
    borderBottomWidth:1,
    borderBottomColor: 'blue',
    fontSize:25,
  },
  texto2: {
    color: '#3f6'
  },
  button: {
    borderRadius: 5,
    borderColor: '#3f6',
    padding:5,
  },

  flexing: {
    display: 'flex',
    flexDirection: 'column',
    borderWidth: 1,
    
  }
});


