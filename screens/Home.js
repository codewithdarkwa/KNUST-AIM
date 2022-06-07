import React, { useLayoutEffect } from "react";
import { Icon, Card } from "react-native-elements";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import { Avatar } from "react-native-elements";
import { DrawerActions } from "@react-navigation/native";

const Home = ({navigation}) => {
    
    useLayoutEffect(() => {
        navigation.setOptions({
          title: "AIM",
          headerStyle: { backgroundColor: "#8b0000" },
          headerTitleStyle: { color: "#fff" },
          headerTintColor: "black",
          headerLeft: () => (
            <View style={{ marginLeft: 20 }}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={()=>navigation.toggleDrawer()}
              >
                <Icon name="menu" size={24} color="#fff"/>
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                width: 60,
                marginRight: 0.5,
              }}
            >
              <TouchableOpacity activeOpacity={0.5}>
                <Avatar source={require("../assets/img/logo.png")} size="small" />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate("Reference")}
              >
                <Icon
                  name="dots-three-vertical"
                  size={20}
                  color="#fff"
                  type="entypo"
                />
              </TouchableOpacity>
            </View>
          ),
        });
      }, [navigation]);

 const AvatarSrc = [
        {
          id: 1,
          src: require("../assets/img/results.png"),
          name: "Results",
        },
        {
          id: 3,
          src: require("../assets/img/profile.png"),
          name:"Profile"
        },
        {
          id: 5,
          src: require("../assets/img/slip.png"),
          name:"Slip"
        },
        {
          id: 2,
          src: require("../assets/img/registration.png"),
          name: "Registration",
        },
        {
          id: 6,
          src: require("../assets/img/fees.png"),
          name:"Fees"
        },
        {
          id: 4,
          src: require("../assets/img/notification.png"),
          name:"Notification"
        },
      
      ];
    return(
        <ScrollView>
        <Card>
          <Card.Image source={require("../assets/img/image.jpg")} />
        </Card>
        <Card>
          <Text style={{fontSize: 20,top: 15,}}> Quick Access</Text>
          <Icon
            name="dots-three-vertical"
            size={20}
            color="black"
            type="entypo"
            style={{ left: 170, bottom: 2 }}
          />
          <Card.Divider />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-betweeen",
              alignItems: "stretch",
              flexWrap:"wrap",
              padding:10
            }}
          >
          {AvatarSrc.map((avatar)=>(
            <TouchableOpacity
            key={avatar.id}
            //  onPress={() => navigation.navigate("Profile")}
             >
              <Avatar
                size="medium"
                rounded
                source={avatar.src}
                containerStyle={{margin:10,marginLeft:5}}
              />
            <Text style={ { color: "black",margin:10, }}>{avatar.name}</Text>
            </TouchableOpacity>
           ))}
           </View>
        </Card>
        <Card>
          <Text style={{ fontSize: 14, bottom: 10, color: "black" }}>Email</Text>
          <Text style={ { fontSize: 20, bottom: 10, color: "black", margin: 7 }}>jnrdrkw1@gmail.com</Text>
          <Text style={ { fontSize: 14, top: 10, color: "black" }}>  Phone Number</Text>
          <Text style={ { fontSize: 17, top: 10, color: "black", margin: 7 }}> 0548153908</Text>
          <Text></Text>
          <Card.Divider />
          <Text style={ { fontSize: 20, top: 10, color: "black" }}> Update contacts?</Text>
          <Text></Text>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <Button color="red" title="YES" />
            <Button color="red" title="NO" />
          </View>
        </Card>
        <Card >
          <Text style={ { fontSize: 25, bottom: 10, color: "black" } }>News</Text>
          <Card.Divider />
          <Text style={{ fontSize: 18, bottom: 10, color: "black" }}>
            KNUST-SRC Climaxes 60th Aniversary Celebration: Donates 50 Laptops
            to Support SONSOL Project
          </Text>
          <Text style={{ fontSize: 15, top: 5 }}>
            The Student Representative Council of the Kwame Nkrumah University
            of Science and Technology (KNUST-SRC) has donated 50 brand new
            laptop computers to brillant but needy students in KNUST.The
            presentation was held on...
          </Text>
          <Text></Text>
          <Card.Divider />
          <Text style={{ fontSize: 18, bottom: 10, color: "black" }}>
            KNUST-SRC Climaxes 60th Aniversary Celebration: Donates 50 Laptops
            to Support SONSOL Project
          </Text>
          <Text style={ { fontSize: 15, top: 5 }}>
            The Student Representative Council of the Kwame Nkrumah University
            of Science and Technology (KNUST-SRC) has donated 50 brand new
            laptop computers to brillant but needy students in KNUST.The
            presentation was held on...
          </Text>
          <Text></Text>
          <Card.Divider />
          <Text style={{ fontSize: 18, bottom: 10, color: "black" }}>
            KNUST-SRC Climaxes 60th Aniversary Celebration: Donates 50 Laptops
            to Support SONSOL Project
          </Text>
          <Text
            style={ { fontSize: 15, top: 5 }}
          >
            The Student Representative Council of the Kwame Nkrumah University
            of Science and Technology (KNUST-SRC) has donated 50 brand new
            laptop computers to brillant but needy students in KNUST.The
            presentation was held on...
          </Text>
          <Text></Text>
          <Card.Divider />
          <Text
            style={ { fontSize: 15, top: 5, }}
          >
            KNUST-SRC Climaxes 60th Aniversary Celebration: Donates 50 Laptops
            to Support SONSOL Project
          </Text>
          <Text
            style={ { fontSize: 15, top: 5 } }
          >
            The Student Representative Council of the Kwame Nkrumah University
            of Science and Technology (KNUST-SRC) has donated 50 brand new
            laptop computers to brillant but needy students in KNUST.The
            presentation was held on...
          </Text>
        </Card>
      </ScrollView>

  );
};

export default Home;