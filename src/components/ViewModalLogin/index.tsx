import { Modal, ModalProps, Text, TouchableOpacity, View , Image, TextInput , ScrollView , KeyboardAvoidingView} from "react-native";
import {styles} from './styles'
import  XCircle from '../../assets/XCircle.png'
import  CadeadoImg from '../../assets/cadeado.png'
import theme from "../../theme";
type ViewModalProps = ModalProps&{
  closeModal: ()=> void
}

export function ViewModalLogin({closeModal , ...rest}:ViewModalProps){
  return(
    <Modal  transparent  animationType="slide" statusBarTranslucent {...rest}>
      <View style={styles.background}>

    
      <View  style={styles.container}>
 
        <View style={styles.content}>

          <Text style={styles.titleWelcome}>Welcome Back!!!</Text>
          <TouchableOpacity onPress={closeModal}>
            <Image style={{
              width: 30,
              height: 30
            }} source={XCircle}/>
          </TouchableOpacity>
        </View>


    
        <View>
          <Text style={styles.email}>username/email</Text>
          <TextInput  style={styles.input} keyboardType="email-address" placeholder="info@example.com"/>

          <TextInput style={styles.input} keyboardType="visible-password" placeholder="password"/>
          <View style={styles.containerImg}>
            <Image style={styles.imageInput} source={CadeadoImg}/>

          </View>
            
        </View>

      
      </View>

      </View>
    </Modal>
  )
}