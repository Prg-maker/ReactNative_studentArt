import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';

import {JetBrainsMono_400Regular , JetBrainsMono_700Bold, useFonts} from '@expo-google-fonts/jetbrains-mono'
import AppLoading from 'expo-app-loading';
import { Home } from './src/screens/Home';

export default function App() {

  const [fontsLoaded] = useFonts({
    JetBrainsMono_400Regular,
    JetBrainsMono_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View>

      <Home/>

      <StatusBar style="light" />
    </View>
  );
}

