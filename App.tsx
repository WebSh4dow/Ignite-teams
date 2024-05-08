import { StatusBar } from 'react-native';
import {ThemeProvider} from 'styled-components';
import {useFonts, Roboto_700Bold_Italic, Roboto_400Regular} from '@expo-google-fonts/roboto';
import { Routes } from 'src/routes';
import theme from './src/theme';
import { Loading } from '@components/Loading';

export default function App() {
const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold_Italic});


  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
        { fontsLoaded ? <Routes/> : <Loading/>}
    </ThemeProvider>
  );
}

