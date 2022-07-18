import { useState } from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'
import Header from '../components/Header'
import { Input, Button, Avatar } from "react-native-elements";
import { StatusBar } from 'react-native';

const Login = ({navigation}) => {

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const AvatarSrc = [
    {
      id: 1,
      src: require("../assets/img/results.png"),
    },
    {
      id: 2,
      src: require("../assets/img/registration.png"),
    },
    {
      id: 3,
      src: require("../assets/img/profile.png"),
    },
    {
      id: 4,
      src: require("../assets/img/notification.png"),
    },
    {
      id: 5,
      src: require("../assets/img/slip.png"),
    },
    {
      id: 6,
      src: require("../assets/img/user.png"),
    },
  ];

  const Verify = () => {
    {
      username.length == 0 || password.length == 0
        ? alert("Required field is missing")
        : navigation.replace("HomeScreen");
    }
  };
    return(
      <>
      <StatusBar barStyle='dark' backgroundColor='red'/>
      <Header />
      <View style={styles.container}>
            <Input
              style={styles.inputContainer}
              type="text"
              placeholder="Username"
              value={username}
              autoFocus={true}
              onChangeText={(text) => setusername(text)}
            />
            <Input
              style={styles.inputContainer}
              type="password"
              placeholder="Password"
              value={password}
              autoFocus={true}
              secureTextEntry
              onChangeText={(text) => setpassword(text)}
            />
            <Button
              title="VERIFY"
              containerStyle={styles.btn}
              type="clear"
              onPress={Verify}
            />
            <View style={{ marginTop: 15 }} />
            <TouchableOpacity>
              <Text>Forget password?</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 250,
            }}
          >
            {AvatarSrc.map((avatar) => (
              <Avatar
                size="small"
                rounded
                source={avatar.src}
                key={avatar.id}
                containerStyle={{ margin: 5, bottom: 50 }}
              />
            ))}
          </View>
      </>
    )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 70,
    justifyContent: "center",
  },
  inputContainer: {
    padding: 10,
    width: 300,
    marginTop: 22,
  },
  btn: {
    backgroundColor: "#990000",
    width: 300,
    borderRadius: 20,
    color: "#fff",
    margin: 10,
  },
});