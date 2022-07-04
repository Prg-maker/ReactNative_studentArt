import { Modal, ModalProps, View } from "react-native";
import  XCircle from '../../assets/XCircle.png'

import {styles} from './styles'

type ViewModalRegisterProps = ModalProps & {
  closeModal: ()=> void
}

export function ViewModalRegister({closeModal, ...rest}:ViewModalRegisterProps){
  return(
    <Modal transparent  animationType="slide" statusBarTranslucent {...rest}>
      <View style={styles.background}>
      
      <View  style={styles.container}>
      
      </View>
      
      </View>
    </Modal>
  )
}