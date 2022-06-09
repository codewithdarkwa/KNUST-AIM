import React from "react";
import { StyleSheet, View, SafeAreaView,Text } from "react-native";
import { Button } from "react-native-elements";

const Bill = ({ navigation }) => {
  return (
    <SafeAreaView style={{flex:1,alignItems:'center'}}>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          marginBottom:20
        }}
      >
        <Button
          onPress={() => navigation.navigate("Pay Fees")}
          title="PAY FEES"
          type="clear"
          containerStyle={styles.button}
        />
      </View>
    </SafeAreaView>
  );
};

export default Bill;

const styles = StyleSheet.create({
  button: {
    width: 350,
    borderRadius: 20,
    backgroundColor: "#990000",
  },
});
