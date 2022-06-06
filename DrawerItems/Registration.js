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
      <View style={styles.Reg}>
        {slips.map((slip) => (
          <View key={slip.id} style={styles.slip}>
            <Image
              source={slip.source}
              style={{
                width: 70,
                height: 70,
                left: 40,
              }}
            />
            <Text style={{ marginTop: 18, fontSize: 18 }}>{slip.name}</Text>
          </View>
        ))}
      </View>
    </>
  );
};

export default Registration;

const styles = StyleSheet.create({
  Reg: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    height: "100vh",
  },
  slip: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowOpacity: 0.5,
    width: 200,
    height: 100,
    marginTop: 10,
  },
});
