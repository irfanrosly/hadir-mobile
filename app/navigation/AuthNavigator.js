import React from "react";
import { createStackNavigator } from "react-navigation";

import LoginScreen from "../screens/Auth/LoginScreen";
import LandingScreen from "../screens/HomeScreen";
export default createStackNavigator(
  { Login: LandingScreen },
  {
    initialRouteName: "Login"
  }
);
