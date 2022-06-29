import { Modal, ModalProps, Text, TouchableOpacity, View } from "react-native";
import {styles} from './styles'

type ViewModalProps = ModalProps&{
  closeModal: ()=> void
}

export function ViewModalLogin({closeModal , ...rest}:ViewModalProps){
  return(
    <Modal transparent  animationType="slide" statusBarTranslucent {...rest}>
      
      <View style={styles.container}>
        <View>
          <Text>Welcome Back!!!</Text>
          <TouchableOpacity onPress={closeModal}>
            <Text>Aperte</Text>
          </TouchableOpacity>
        </View>

      </View>
    </Modal>
  )
}