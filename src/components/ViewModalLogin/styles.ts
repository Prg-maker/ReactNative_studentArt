  import {StyleSheet} from 'react-native'
import theme from '../../theme'

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 371,
    backgroundColor: theme.colors.background_modal,
    borderTopStartRadius:40,
    borderTopRightRadius:40,
    paddingHorizontal: 25
  },

  background:{
    height: '100%',
    backgroundColor:'rgba(5, 5, 34, 0.5)'
  },

  content:{
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
  imageInput:{
  }

})