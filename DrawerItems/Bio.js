import React, { useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Card, Icon } from "react-native-elements";

const Bio = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "BIO",
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

  return (
    <ScrollView>
      <Card containerStyle={{ width: "100%" }}>
        <Text style={{ fontSize: 20, left: 60, top: 20 }}>John Darkwah</Text>
        <Icon name="person" size={24} style={{ right: 140, bottom: 2 }} />
        <Text style={{ left: 60 }}>Name</Text>
        <Text></Text>
        <Text style={{ fontSize: 20, left: 60 }}>Male</Text>
        <Text style={{ left: 60, top: 5 }}>Gender</Text>
        <Text></Text>

        <Card.Divider />
        <Text style={{ fontSize: 20, left: 60, top: 20 }}>
          jdarkwah1@st.knust.edu.gh
        </Text>
        <Icon name="mail" size={24} style={{ right: 150, bottom: 2 }} />
        <Text style={{ left: 60, top: 5 }}>School Email Address</Text>
        <Text></Text>
        <Text style={{ fontSize: 20, left: 60, top: 5 }}>
          jnrdrkw1@gmail.com
        </Text>
        <Text style={{ left: 60, top: 5 }}>Personal Email Address</Text>
        <Text></Text>

        <Card.Divider />
        <Text style={{ fontSize: 20, left: 60, top: 15 }}>0548153908</Text>
        <Icon name="call" size={24} style={{ right: 150, bottom: 2 }} />
        <Text style={{ left: 60, bottom: 5 }}>Primary Mobile Number</Text>
        <Text></Text>
        <Text style={{ fontSize: 20, left: 60 }}>0208961943</Text>
        <Text style={{ left: 60 }}>KNUST Mobile Number</Text>
        <Text></Text>
        <Text style={{ fontSize: 20, left: 60 }}>0548153908</Text>
        <Text style={{ left: 60 }}>Other Phone Number</Text>
        <Text></Text>

        <Card.Divider />
        <Text style={{ fontSize: 20, left: 50, top: 30 }}>
          JACHIE PRAMSO SENIOR HIGH SCHOOL
        </Text>
        <Icon name="location-pin" size={24} style={{ right: 160, bottom: 2 }} />
        <Text style={{ fontSize: 20, left: 50, top: 5 }}>P.O.BOX 18</Text>
        <Text style={{ fontSize: 20, left: 50, top: 5 }}>
          KUMASI-ASHANTI GHANA
        </Text>
        <Text style={{ left: 50, top: 5 }}>Postal Address</Text>
        <Text></Text>
        <Text style={{ fontSize: 20, left: 50, top: 30 }}>BECHEM PRESEC</Text>
        <Text style={{ fontSize: 20, left: 50, top: 25 }}>BLOCK 6</Text>
        <Text style={{ fontSize: 20, left: 50, top: 20 }}>AHAFO GHANA</Text>
        <Text style={{ left: 50, top: 18 }}>Residential Address</Text>
        <Text></Text>
        <Text style={{ fontSize: 20, left: 50, top: 20 }}>ASHANTI REGION</Text>
        <Text style={{ left: 50, top: 18 }}>Region</Text>
        <Text style={{ fontSize: 20, left: 50, top: 30 }}>GHANA</Text>
        <Text style={{ left: 50, top: 30 }}>Country</Text>
        <Text></Text>
        <Text></Text>
        <Card.Divider />
      </Card>
    </ScrollView>
  );
};

export default Bio;
