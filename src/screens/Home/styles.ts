import {ColorPropType, StyleSheet} from 'react-native'
import theme from '../../theme'

export const styles = StyleSheet.create({
  container:{
    height: '100%',
    backgroundColor: theme.colors.color_background,
    alignItems:'center',
  },

  titleWelcome:{
    color: theme.colors.text_color_red,
    fontFamily: theme.fonts.fontBold,
    fontSize: 36,
    textShadowColor: '-1px 1px 10px rgba(239, 88, 88, 0.15)',
    lineHeight: 48,
    
    
  },
  subTitle:{
    color: theme.colors.text_color_white,
    fontFamily: theme.fonts.fontMedium,
    fontSize:16,
    paddingTop: 9,
    textAlign: 'center',
    marginLeft:25
  },


  buttonCreateAccount:{
    width: '65%',
    height: 60,
    backgroundColor:theme.colors.button_background, 
    borderRadius:10,
    marginTop:37,
    marginBottom: 15
    
  },
  titleButtonCreate:{
    textAlign:'center',
    paddingTop: 15,
    fontFamily: theme.fonts.fontBold,
    fontSize:18,
    color: theme.colors.color_background,

  },

  buttonLogin:{
   
    width: '65%',
    height: 60,
    backgroundColor:theme.colors.color_background,
    borderRadius:10,
    borderWidth:4,
    borderColor:'#FFDE69',
    alignItems:'center',
    justifyContent:'center',
  },
  buttonLoginTitle:{
    color:"#FFDE69",
    fontFamily:theme.fonts.fontBold,
    fontSize:19
  },
  Direction:{
    fontFamily: theme.fonts.fontMedium,
    color: '#FFDE69',
    marginTop: 36
  }
})