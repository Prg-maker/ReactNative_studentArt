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

  background:{
    height: '100%',
    backgroundColor:'rgba(5, 5, 34, 0.5)'
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
    marginTop: 5

  },
  textLogin:{
    color: theme.colors.button_background,
    fontFamily: theme.fonts.fontBold,
    fontSize: 19,
    lineHeight: 29,
    textAlign:'center',
    paddingVertical: 13
    
  },
  containerTextRegister:{
    fontFamily: theme.fonts.fontBold,
    color: theme.colors.input_color,
    textAlign:'center',
    flex: 1,
    flexDirection:'row'

    
    
  },
  buttonRegister:{
    paddingTop:10,
    textAlign:'center',
    height: '100%'

  },
  textRegister:{
    color:theme.colors.text_color_red,
    fontFamily:theme.fonts.fontBold,
  }

})