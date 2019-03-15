import React from "react";
import { createStackNavigator } from "react-navigation";

// import MainScreen from "../screens/Main/MainScreen";
import HomeScreen from "../screens/HomeScreen";
import CreateStudentScreen from "../screens/CreateStudentScreen";
import CreateAttendanceScreen from "../screens/CreateAttendanceScreen";
import GetStudent from "../screens/GetStudentScreen";
import GetStudentScreen from "../screens/GetStudentScreen";

export default createStackNavigator(
  {
    Home: HomeScreen,
    CreateStudent: CreateStudentScreen,
    CreateAttendance: CreateAttendanceScreen,
    GetStudent: GetStudentScreen
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);
