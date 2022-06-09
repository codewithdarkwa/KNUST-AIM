import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const Registration = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Registration",
      headerStyle: { backgroundColor: "#8b0000" },
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
    });
  }, [navigation]);
  const slips = [
    {
      id: 1,
      source: "require('../assets/img/slip.png')",
      name: "Get registration Slip",
    },
    {
      id: 2,
      source: "require('../assets/img/slip.png')",
      name: "Edit registration Slip",
    },
    {
      id: 3,
      source: "require('../assets/img/slip.png')",
      name: "Registration Instruction",
    },
  ];
  return (
    <>
    
    </>
  );
};

export default Registration;

const styles = StyleSheet.create({});
