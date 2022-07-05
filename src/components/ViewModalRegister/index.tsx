import { Image, Modal, ModalProps, TouchableOpacity, View , Text, TextInput} from "react-native";
import  XCircle from '../../assets/XCircle.png'

import {styles} from './styles'

type ViewModalRegisterProps = ModalProps & {
  closeModal: ()=> void,
  toggleLogin:()=> void
}

export function ViewModalRegister({closeModal,toggleLogin , ...rest}:ViewModalRegisterProps){
  return(

    <Modal transparent  animationType="slide" statusBarTranslucent {...rest}>
      
      <View  style={styles.container}>
      

      <View style={styles.header}>

      <View>
        <Text style={styles.titleHello}>Hello...</Text>
        <Text style={styles.titleRegister}>Register</Text>
      </View>

      <TouchableOpacity onPress={closeModal}>
        <Image style={{
          width: 30,
          height: 30
        }} source=  {XCircle}/>
      </TouchableOpacity>
      </View>



      <View>
          <Text style={styles.email}>username/email</Text>
          <TextInput  style={styles.input} keyboardType="email-address" placeholder="info@example.com"/>
          <TextInput style={styles.input} keyboardType="default" placeholder="course"/>

          <TextInput style={styles.input} keyboardType="number-pad" placeholder="password"/>
          <TextInput style={styles.input} keyboardType="number-pad" placeholder="confirm password"/>
         
            
      </View>
        
      <TouchableOpacity style={styles.buttonRegister}>
        <Text style={styles.textRegister}>Register</Text>
      </TouchableOpacity>
      

      <View style={styles.linkToLogin}>
        <Text style={styles.text}>Already have account? </Text>
        <TouchableOpacity onPress={toggleLogin}>
          <Text style={styles.textLogin}>Login</Text>
        </TouchableOpacity>
      </View>
   




      </View>
      
    </Modal>

  )
}