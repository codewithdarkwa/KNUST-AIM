import { SafeAreaView, Image, ImageBackground } from "react-native";
import {
  FontAwesome,
  MaterialIcons,
  FontAwesome5,
} from "react-native-vector-icons";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import MainStackNavigator from "./StackNavigator";
import Profile from "../DrawerItems/Profile";
import Registration from "../DrawerItems/Registration";
import Results from "../DrawerItems/Results";
import Fees from "../DrawerItems/Fees";
import Notification from "../DrawerItems/Notification";
import CourseMaterial from "../DrawerItems/Course_Material";
import Lecturer_Assessment from "../DrawerItems/Lecturer_Assessment";
import Setting from "../DrawerItems/Setting";
import Help_feedback from "../DrawerItems/Help_feedback";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <SafeAreaView>
            <ImageBackground
              source={require("../assets/img/Darkwa.jpg")}
              style={{
                height: 150,
                width: 280,
                alignItems: "flex-start",
                justifyContent: "center",
                backgroundColor: "cyan",
              }}
            >
              <Image
                source={require("../assets/img/John.png")}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 80 / 2,
                  marginBottom: 70,
                }}
              />
            </ImageBackground>
            <DrawerItemList {...props} />
          </SafeAreaView>
        );
      }}
    >
      <Drawer.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <FontAwesome
              name="home"
              size={25}
              color="#fff"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <FontAwesome
              name="user"
              size={25}
              color="#fff"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Registration"
        component={Registration}
        options={{
          drawerIcon: () => (
            <FontAwesome5
              name="file-invoice"
              size={25}
              color="#fff"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Results"
        component={Results}
        options={{
          drawerIcon: () => (
            <FontAwesome
              name="check-square"
              size={25}
              color="#fff"
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Fees"
        component={Fees}
        options={{
          drawerIcon: () => (
            <FontAwesome
              name="money"
              size={25}
              color="#fff"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={Notification}
        options={{
          drawerIcon: () => (
            <FontAwesome
              name="bell"
              size={25}
              color="#fff"
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Course Materials"
        component={CourseMaterial}
        options={{
          drawerIcon: () => (
            <FontAwesome
              name="file-text"
              size={25}
              color="#fff"
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Lecturer Assessment"
        component={Lecturer_Assessment}
        options={{
          drawerIcon: () => (
            <FontAwesome5
              name="user-check"
              size={25}
              color="#fff"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Setting}
        options={{
          drawerIcon: () => (
            <FontAwesome
              name="cog"
              size={25}
              color="#fff"
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Help & Feedback"
        component={Help_feedback}
        options={{
          drawerIcon: () => (
            <MaterialIcons
              name="help-center"
              size={25}
              color="#fff"
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
