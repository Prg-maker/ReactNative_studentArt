import { useState } from "react";
import { Image, Modal, ModalProps, TouchableOpacity, View , Text, TextInput , ActivityIndicator} from "react-native";
import  XCircle from '../../assets/XCircle.png'
import { api } from "../../libs/api";

import {styles} from './styles'

type ViewModalRegisterProps = ModalProps & {
  closeModal: ()=> void,
  toggleLogin:()=> void
}

export function ViewModalRegister({closeModal,toggleLogin , ...rest}:ViewModalRegisterProps){
  const [email , setEmail] = useState('')
  const [course, setCourse] = useState('')
  const [password , setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const [isLoading , setIsLoading] = useState(false)




  async function handleSendInfo(){


    if(!email){
      alert('email não foi fornecido')
    }
    if(!course){
      alert('course não foi fornecido')
    }
    if(!password){
      alert('senha não foi fornecido')
    }

    if(passwordConfirm != password){
      alert('senha está errada')
    }

    try{
      setIsLoading(true)
      await api.post('/' , {
        email,
        course,
        password
      })
      setIsLoading(false)
      setEmail('')
      setCourse('')
      setPassword('')
      setPasswordConfirm('')
      closeModal()

    }catch(err){
      console.log(err)
    }
  }

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
          <TextInput onChangeText={setEmail} value={email}  style={styles.input} keyboardType="email-address" placeholder="info@example.com"/>
          <TextInput  onChangeText={setCourse} value={course}  style={styles.input} keyboardType="default" placeholder="course"/>

          <TextInput onChangeText={setPassword} value={password}style={styles.input} placeholder="password"/>
          <TextInput onChangeText={setPasswordConfirm} value={passwordConfirm}  style={styles.input}  placeholder="confirm password"/>
         
            
      </View>
        
     {isLoading? 
      <TouchableOpacity disabled={true}  onPress={handleSendInfo} style={styles.buttonRegister}>
        <ActivityIndicator size="large" color="#FFDE69" /> 
      </TouchableOpacity>
    
     :  
      <TouchableOpacity   onPress={handleSendInfo} style={styles.buttonRegister}>
        <Text style={styles.textRegister}>Register</Text>
      </TouchableOpacity>
 
     
     }

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