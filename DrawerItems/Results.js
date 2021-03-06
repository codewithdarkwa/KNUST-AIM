import React, { useLayoutEffect } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import { ListItem, Icon } from "react-native-elements";
const Results = ({ navigation }) => {
 

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Results",
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

        <ScrollView style={{ marginTop: 5 }}>
          <ListItem bottomDivider>
            <Icon name="file-text-o" size={35} type="font-awesome" />
            <ListItem.Subtitle> </ListItem.Subtitle>
            <ListItem.Content>
              <ListItem.Title>Year 1, Second Semester</ListItem.Title>
              <ListItem.Subtitle>2020/2021 Academic Year</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem bottomDivider>
            <Icon name="file-text-o" size={35} type="font-awesome" />
            <ListItem.Content>
              <ListItem.Title>Year 1, Second Semester</ListItem.Title>
              <ListItem.Subtitle>2020/2021 Academic Year</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </ScrollView>
  );
};

export default Results;
