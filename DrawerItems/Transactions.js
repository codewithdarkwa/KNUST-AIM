import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";

const Transactions = () => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Button title="PAY FEES" type="clear" containerStyle={styles.button} />
    </View>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 20,
    color: "white",
    backgroundColor: "#990000",
    marginTop: 600,
  },
});
