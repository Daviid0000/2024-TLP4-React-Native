export const validationUser = (user, pass, usuarios, navigation, setModalVisible, setPass, setUser) => {
    const usuario = usuarios.find((u) => u.name === user.trim() && u.password === pass.trim());
    
    if (usuario) {
      navigation.navigate("Home");
      console.log("User:", usuario.name, " Pass:", usuario.password)
      setUser('')
      setPass('')
    } else {
      console.log("Usuario o contraseña incorrecta");
      setModalVisible(true)
    }
  }