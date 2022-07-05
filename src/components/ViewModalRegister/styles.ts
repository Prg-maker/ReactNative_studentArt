import {StyleSheet} from 'react-native'
import theme from '../../theme'

export const styles = StyleSheet.create({

  container:{
    flex: 1,
    marginTop: 240,
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
  titleHello:{
    fontFamily: theme.fonts.fontMedium,
    fontSize:18
  },
  titleRegister:{
    fontFamily: theme.fonts.fontBold,
    color: theme.colors.input_color,
    fontSize:28,
    marginTop:5
  },

  email:{
    paddingTop: 10,
    fontFamily:theme.fonts.fontMedium,
    fontSize:16

  },
  input:{
    width: '100%',
    height: 50,
    paddingLeft:25,
    marginTop:20,
    borderWidth:2,
    borderColor:theme.colors.input_color,
    borderRadius:10,
    fontFamily:theme.fonts.fontMedium,
    alignItems:'center',
    position: 'relative',

  },
  buttonRegister:{
    width: '100%',
    height: 60,
    backgroundColor:theme.colors.input_color,
    marginVertical:15,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15,


  },
  textRegister:{
    color: theme.colors.button_background,
    fontFamily:theme.fonts.fontBold,
    fontSize:20
  },
  linkToLogin:{
    flexDirection:'row',
  }
})