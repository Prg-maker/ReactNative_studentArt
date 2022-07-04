import {StyleSheet} from 'react-native'
import theme from '../../theme'

export const styles = StyleSheet.create({
  background:{
    height: '100%',
    backgroundColor:'rgba(5, 5, 34, 0.5)'
  },

  container:{
    flex: 1,
    marginTop: 240,
    backgroundColor: theme.colors.background_modal,
    borderTopStartRadius:40,
    borderTopRightRadius:40,
    paddingTop:25,
    paddingHorizontal: 25
  }
})