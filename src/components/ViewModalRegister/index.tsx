import { Image, Modal, ModalProps, TouchableOpacity, View , Text, TextInput} from "react-native";
import  XCircle from '../../assets/XCircle.png'

import {styles} from './styles'

type ViewModalRegisterProps = ModalProps & {
  closeModal: ()=> void
}

export function ViewModalRegister({closeModal, ...rest}:ViewModalRegisterProps){
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

          <TextInput style={styles.input} keyboardType="decimal-pad" placeholder="default"/>
          <TextInput style={styles.input} keyboardType="decimal-pad" placeholder="confirm password"/>
         
            
      </View>






      </View>
      
    </Modal>

  )
}