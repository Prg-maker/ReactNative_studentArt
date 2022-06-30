import { Modal, ModalProps, Text, TouchableOpacity, View , Image} from "react-native";
import {styles} from './styles'
import  XCircle from '../../assets/XCircle.png'
type ViewModalProps = ModalProps&{
  closeModal: ()=> void
}

export function ViewModalLogin({closeModal , ...rest}:ViewModalProps){
  return(
    <Modal  transparent  animationType="slide" statusBarTranslucent {...rest}>
      <View style={styles.background}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titleWelcome}>Welcome Back!!!</Text>
          <TouchableOpacity onPress={closeModal}>
            <Image style={{
              width: 30,
              height: 30
            }} source={XCircle}/>
          </TouchableOpacity>
        </View>

      </View>
      </View>
    </Modal>
  )
}