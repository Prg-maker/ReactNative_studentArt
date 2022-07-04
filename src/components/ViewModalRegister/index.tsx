import { Image, Modal, ModalProps, TouchableOpacity, View , Text} from "react-native";
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
        }} source={XCircle}/>
      </TouchableOpacity>
      </View>







      </View>
      
    </Modal>

  )
}