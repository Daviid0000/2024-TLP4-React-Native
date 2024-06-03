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

  export const createUser = (emailCreate, usuarios, userCreate, passCreate, setUsers, navigation, setPassCreate, setEmailCreate, setUserCreate, setUserError, setPassError) => {

    setUserError('');
    setPassError('');
    if (userCreate.length < 5 || userCreate.length > 10) {
      setUserError('El nombre de usuario debe tener entre 5 y 10 caracteres');
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
    console.log("Testing password:", passCreate);
    console.log("Password meets length requirement:", passCreate.length >= 5);
    console.log("Password matches RegExp:", passwordRegex.test(passCreate));

    if (!passwordRegex.test(passCreate.trim())) {
      console.log("Password matches RegExp:", passwordRegex.test(passCreate));
        setPassError('La contraseña debe tener al menos 5 caracteres y debe incluir símbolos, letras mayúsculas, minúsculas y números');
        return;
    }
    
    const usuario = usuarios.find((u) => u.email === emailCreate.trim())

    if(!usuario) {
      const newUser = { name: userCreate, email: emailCreate, password: passCreate };
      setUsers([...usuarios, newUser]);
      console.log("¡Usuario creado!");
      console.log("Usuarios:", [...usuarios, newUser]);
      setPassCreate('');
      setEmailCreate('');
      setUserCreate('');
      navigation.navigate("Login");
    }
    else {
      console.log("Ya existe un usuario con ese email")
      console.log("Usuarios:", usuarios)
    }
  }