import React, { useLayoutEffect, useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { ListItem, Icon } from "react-native-elements";
import Loading from "../components/Loading";

const Course_Material = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Course Materials",
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

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  const courses = [
    {
      id: 1,
      name: "ECON 152 ELEMENTS OF ECONOMICS II",
      year: "2020/2021 Second Semester, Year 1",
    },
    {
      id: 2,
      name: "CSM 158 PROGRAMMING WITH C++",
      year: "2020/2021 Second Semester, Year 1",
    },
    {
      id: 3,
      name: "MATH 162 INTRODUCTORY PURE MATHEMATICS",
      year: "2020/2021 Second Semester, Year 1",
    },
    {
      id: 4,
      name: "MATH 166 INTRODUCTION TO PROBABILITY AND STATISTICS",
      year: "2020/2021 Second Semester, Year 1",
    },
    {
      id: 5,
      name: "CSM 166 DISCRETE MATHEMATICS FOR COMPUTER SCIENCE II",
      year: "2020/2021 Second Semester, Year 1",
    },
    {
      id: 6,
      name: "CSM 152 INFORMATION TECHNOLOGY II",
      year: "2020/2021 Second Semester, Year 1",
    },
    {
      id: 7,
      name: "COMMUNICATION SKILLS II",
      year: "2020/2021 Second Semester, Year 1",
    },
  ];
  return (
    <>
      {!loading ? (
        <Loading />
      ) : (
        <ScrollView style={{ marginTop: 5 }}>
          <ListItem bottomDivider>
            <Text style={{ fontSize: 20, color: "grey" }}>
              Select a course to view related files
            </Text>
          </ListItem>
          {courses.map((course) => (
            <ListItem key={course.id} bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{course.name}</ListItem.Title>
                <ListItem.Subtitle>{course.year}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))}
        </ScrollView>
      )}
    </>
  );
};

export default Course_Material;
