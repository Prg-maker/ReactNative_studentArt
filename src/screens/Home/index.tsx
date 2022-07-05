import { useState } from "react";
import { Image, Text, View, TouchableOpacity , Modal} from "react-native";
import StudentImg from "../../assets/student.png";
import { ViewModalLogin } from "../../components/ViewModalLogin";
import { ViewModalRegister } from "../../components/ViewModalRegister";
import { styles } from "./styles";

export function Home() {
  const [openModalLogin , setOpenModalLogin] = useState(false)

  const [openModalRegister , setOpenModalRegister] = useState(false)

  function IsOpenModalViewLogin(){
    setOpenModalLogin(true)
  }
  function handleCloseViewModalLogin(){
    setOpenModalLogin(false)
  }



  function IsOpenModalViewRegister(){
    setOpenModalRegister(true)
  }

  function handleCloseViewModalRegister(){
    setOpenModalRegister(false)
  }

  function handleToggleRegister(){
    setOpenModalLogin(false)
    setOpenModalRegister(true)
  }

  

  return (
    <View style={styles.container}>
      <Image source={StudentImg} />

      <Text style={styles.titleWelcome}>Welcome</Text>
      <Text style={styles.subTitle}>
        Lorem ipsum dolor sit   {'\n'} amet, consectetur   {'\n'} adipiscing elit, sed   {'\n'} do
        eiusmod
      </Text>

      <TouchableOpacity onPress={IsOpenModalViewRegister} style={styles.buttonCreateAccount}>
        <Text style={styles.titleButtonCreate}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={IsOpenModalViewLogin} style={styles.buttonLogin}>
        <Text  style={styles.buttonLoginTitle}>Login</Text>
      </TouchableOpacity>
     
      <Text style={styles.Direction}>All Right Reserved @2021</Text>

      <ViewModalRegister closeModal={handleCloseViewModalRegister} visible={openModalRegister}/>

      <ViewModalLogin toggleRegister={handleToggleRegister} closeModal={handleCloseViewModalLogin} visible={openModalLogin} />
   

    </View>
  );
}
