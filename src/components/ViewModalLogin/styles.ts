import {StyleSheet} from 'react-native'
import theme from '../../theme'

export const styles = StyleSheet.create({
 
  container:{
    flex: 1,
    marginTop: 371,
    backgroundColor: theme.colors.background_modal,
    borderTopStartRadius:40,
    borderTopRightRadius:40,
    paddingTop:25,
    paddingHorizontal: 25
  },



  header:{
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop:29 

  },
  titleWelcome:{
    fontFamily: theme.fonts.fontMedium,
    color: theme.colors.input_color,
    fontSize:18
  },
  email:{
    paddingTop: 27,
    paddingBottom:4,
    fontFamily:theme.fonts.fontMedium,
    fontSize:16

  },
  input:{
    width: '100%',
    height: 50,
    paddingLeft:25,
    marginTop:25,
    borderWidth:2,
    borderColor:theme.colors.input_color,
    borderRadius:10,
    fontFamily:theme.fonts.fontMedium,
    alignItems:'center',
    position: 'relative',

  },
  containerImg:{
    width: '5%',
    alignItems:'flex-end',
    top:-35,
    left: 300,
  },
  textForgotPassword:{
    fontFamily: theme.fonts.fontMedium,
    color:theme.colors.input_color,
    textAlign:'right'
  },
  buttonLogin:{
    width: '100%',
    backgroundColor:theme.colors.input_color,
    height: 60,
    borderRadius:15,
    marginTop: 5,
    justifyContent:'center'

  },
  textLogin:{
    color: theme.colors.button_background,
    fontFamily: theme.fonts.fontBold,
    fontSize: 19,
    lineHeight: 29,
    textAlign:'center',
    
  },
  containerTextRegister:{
  
    flexDirection:'row',
    justifyContent:'center',
    marginTop:12,

    
  },
  text:{
    fontFamily:theme.fonts.fontMedium,
    color: theme.colors.color_background
  },
  textRegister:{
    fontFamily:theme.fonts.fontBold,
    color: theme.colors.text_color_red
  }

})