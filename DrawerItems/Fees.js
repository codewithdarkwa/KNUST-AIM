import React, { useLayoutEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import FeesTopTabNavigator from "../navigation/FeesTopTabNavigator";
const Fees = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Fees",
      headerStyle: { backgroundColor: "#990000" },
      headerTitleStyle: { color: "#fff" },
      headerTintColor: "black",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.toggleDrawer()}
          >
            <Icon name="menu" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: 70,
            marginRight: 0.5,
          }}
        >
          <TouchableOpacity activeOpacity={0.5}>
            <Icon name="download" size={24} color="#fff" type="font-awesome" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <>
      <FeesTopTabNavigator />
    </>
  );
};

export default Fees;
