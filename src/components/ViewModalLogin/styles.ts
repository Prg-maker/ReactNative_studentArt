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

  content:{
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop:29 

  },
  titleWelcome:{
    fontFamily: theme.fonts.fontMedium,
    color: theme.colors.input_color,
    fontSize:18
  }
})