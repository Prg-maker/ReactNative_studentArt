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
})