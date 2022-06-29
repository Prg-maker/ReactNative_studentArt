import { useState } from "react";
import { Image, Text, View, TouchableOpacity , Modal} from "react-native";
import StudentImg from "../../assets/student.png";
import { ViewModalLogin } from "../../components/ViewModalLogin";
import { styles } from "./styles";

export function Home() {
  const [openModal , setOpenModal] = useState(false)

  function IsOpenModalView(){
    setOpenModal(true)
  }
  function handleClose(){
    setOpenModal(false)
  }

  return (
    <View style={styles.container}>
      <Image source={StudentImg} />

      <Text style={styles.titleWelcome}>Welcome</Text>
      <Text style={styles.subTitle}>
        Lorem ipsum dolor sit   {'\n'} amet, consectetur   {'\n'} adipiscing elit, sed   {'\n'} do
        eiusmod
      </Text>

      <TouchableOpacity style={styles.buttonCreateAccount}>
        <Text style={styles.titleButtonCreate}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={IsOpenModalView} style={styles.buttonLogin}>
        <Text  style={styles.buttonLoginTitle}>Login</Text>
      </TouchableOpacity>
     
      <Text style={styles.Direction}>All Right Reserved @2021</Text>

      <ViewModalLogin closeModal={handleClose} visible={openModal} />
   

    </View>
  );
}
