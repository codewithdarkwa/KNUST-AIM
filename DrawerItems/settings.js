import React, { useLayoutEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import { ListItem, Icon } from "react-native-elements";
const settings = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Settings",
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
    <View style={{ marginTop: 5 }}>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>Check for Google Play Service</ListItem.Title>
          <ListItem.Subtitle>
            Checks if Google play services is installed
          </ListItem.Subtitle>
          <ListItem.Subtitle></ListItem.Subtitle>
          <ListItem.Subtitle>NOTIFICATION SETTINGS</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>Notification Tone</ListItem.Title>
          <ListItem.Subtitle>Default ringtone(Whistle)</ListItem.Subtitle>
          <ListItem.Subtitle></ListItem.Subtitle>
          <ListItem.Subtitle>SECURITY</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>Change Pin</ListItem.Title>
          <ListItem.Subtitle>Click to change pin</ListItem.Subtitle>
          <ListItem.Subtitle></ListItem.Subtitle>
          <ListItem.Subtitle>ABOUT</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>Version</ListItem.Title>
          <ListItem.Subtitle>1.0.26</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>Developer</ListItem.Title>
          <ListItem.Subtitle>
            University Information Technology Services
          </ListItem.Subtitle>
          <ListItem.Subtitle>
            Kwame Nkrumah University of Science and Technology
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

export default settings;
