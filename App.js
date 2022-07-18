import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
   <NavigationContainer>
    <DrawerNavigator />
   <StatusBar style="dark" backgroundColor="red" />
   </NavigationContainer>
    </>
  );
}


