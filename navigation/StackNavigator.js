import Login from "../screens/Login";
import Reference from "../screens/Reference";
import Home from "../screens/Home";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

const MainStackNavigator = () => {

    return(
        <Stack.Navigator >
            {/* <Stack.Screen name="Reference" component={Reference} options={{headerShown:false}}/> */}
            {/* <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/> */}
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

export default MainStackNavigator;
