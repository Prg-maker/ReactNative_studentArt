import { Modal, ModalProps, Text, TouchableOpacity, View , Image, TextInput , ScrollView , KeyboardAvoidingView} from "react-native";
import {styles} from './styles'
import  XCircle from '../../assets/XCircle.png'
import  CadeadoImg from '../../assets/cadeado.png'
type ViewModalProps = ModalProps&{
  closeModal: ()=> void
}

export function ViewModalLogin({closeModal , ...rest}:ViewModalProps){
  return(
    <Modal  transparent  animationType="slide" statusBarTranslucent {...rest}>
      <View style={styles.background}>

    
      <View  style={styles.container}>
 
        <View style={styles.header}>

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

          <TextInput style={styles.input} keyboardType="decimal-pad" placeholder="password"/>
          <View style={styles.containerImg}>
            <Image  source={CadeadoImg}/>
          </View>
            
        </View>


        <Text style={styles.textForgotPassword}>Forgot Password?</Text>

        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={styles.textLogin}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.containerTextRegister}>Dont have an account? 
          <TouchableOpacity style={styles.buttonRegister}><Text style={styles.textRegister}>Register</Text></TouchableOpacity>
        </Text>

      </View>



      </View>
    </Modal>
  )
}