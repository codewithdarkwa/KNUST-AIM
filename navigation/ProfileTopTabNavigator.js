import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Programme from "../DrawerItems/Programme";
import Bio from "../DrawerItems/Bio";


const Tab = createMaterialTopTabNavigator();

const ProfileTopTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Bio" component={Bio}/>
      <Tab.Screen name="Programe" component={Programme}/>
    </Tab.Navigator>
  );
};

export default ProfileTopTabNavigator;
