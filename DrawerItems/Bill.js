import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { Button } from "react-native-elements";

const Bill = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 500,
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
    width: "100%",
    borderRadius: 20,
    color: "white",
    backgroundColor: "#990000",
  },
});
