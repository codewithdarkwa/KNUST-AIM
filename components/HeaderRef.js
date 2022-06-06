import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  SafeAreaView,
} from "react-native";
import {Avatar} from "react-native-elements";
const { height } = Dimensions.get("window");

const HeaderRef = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
           width: "100%",
           height: height / 3.5,
           backgroundColor: "#8b0000",
           padding:25
      }}>
        <Image
          source={require("../assets/img/aim.png")}
          style={{
            width: 150,
            height: 70,
            alignSelf: "center",
        }}
        />
        
          <Avatar
            rounded
            size="xlarge"
            source={require("../assets/img/avatar.jpg")}
            containerStyle={{alignSelf: "center",top:20}}
          />
      </View>
    </SafeAreaView>
  );
};

export default HeaderRef;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
