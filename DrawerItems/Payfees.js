import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";

import PayfeesHeader from "../components/PayfeesHeader";

const Payfees = () => {
  return (
    <>
      <PayfeesHeader />
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Button
          title="PROCEED TO CHECKOUT"
          type="clear"
          containerStyle={styles.button}
        />
      </View>
    </>
  );
};

export default Payfees;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 20,
    color: "white",
    backgroundColor: "#990000",
    marginTop: 600,
  },
});
