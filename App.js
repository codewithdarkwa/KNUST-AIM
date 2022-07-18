import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';
import { StatusBar,SafeAreaView } from "react-native";


export default function App() {
  const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={{ backgroundColor }}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  );

  return (
    <>
   <NavigationContainer>
   <MyStatusBar barStyle="light-content" backgroundColor="#8b0000" />
    <DrawerNavigator />
   </NavigationContainer>
    </>
  );
}


