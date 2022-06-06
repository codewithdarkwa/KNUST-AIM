import React, { useLayoutEffect } from "react";
import { ScrollView } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Icon, ListItem, Avatar } from "react-native-elements";

const { width, heigth } = Dimensions.get("window");
const Lecturer_Assessment = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Lecturer Assessment",
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
  const lectures = [
    {
      id: 1,
      image:
        "https://w7.pngwing.com/pngs/997/111/png-transparent-graduation-profile-picture-circle-silhouette-avatar-head-account-round-flat.png",
    },
    {
      id: 2,
      image:
        "https://w7.pngwing.com/pngs/997/111/png-transparent-graduation-profile-picture-circle-silhouette-avatar-head-account-round-flat.png",
    },
    {
      id: 3,
      image:
        "https://w7.pngwing.com/pngs/997/111/png-transparent-graduation-profile-picture-circle-silhouette-avatar-head-account-round-flat.png",
    },
    {
      id: 4,
      image:
        "https://w7.pngwing.com/pngs/997/111/png-transparent-graduation-profile-picture-circle-silhouette-avatar-head-account-round-flat.png",
    },
  ];
  return (
    <ScrollView>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Subtitle>
            <Text style={{ fontSize: 20, color: "grey" }}>
              Select a Lecturer to Assess
            </Text>
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      {lectures.map((lecturer) => (
        <View key={lecturer.id} style={styles.listItem}>
          <TouchableOpacity>
            <View style={{ marginVertical: -15 }}>
              <Avatar rounded size="large" source={{ uri: lecturer.image }} />
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default Lecturer_Assessment;

const styles = StyleSheet.create({
  listItem: {
    marginTop: 15,
    padding: 25,
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowOpacity: 0.2,
    width: width,
    height: 100,
  },
});
