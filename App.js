import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';
import { StatusBar } from "react-native";

export default function App() {
  return (
    <>
   <NavigationContainer>
    <DrawerNavigator />
   <StatusBar barStyle="light-content" backgroundColor="red"/>
   </NavigationContainer>
    </>
  );
}


