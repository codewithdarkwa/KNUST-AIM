import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';
import { StatusBar,SafeAreaView,View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import {useState,useEffect,useCallback} from "react"

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
        setAppIsReady(true); 
    }
    setTimeout(()=>{
      prepare();
    },2000)
    
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) await SplashScreen.hideAsync();
  }, [appIsReady]);
  if (!appIsReady) return null;
  const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={{ backgroundColor }}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  );

  return (
    <NavigationContainer>
   <MyStatusBar barStyle="light-content" backgroundColor="#8b0000" />
     <SafeAreaView onLayout={onLayoutRootView} style={{flex:1}}>
    <DrawerNavigator />
    </SafeAreaView>
   </NavigationContainer>
  );
}


