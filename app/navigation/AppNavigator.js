import React from "react";
import { createStackNavigator } from "react-navigation";
import { Root } from "native-base";

import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./MainNavigator";

const AppNavigator = createStackNavigator(
  {
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Auth: AuthNavigator,
    Main: MainNavigator
  },
  {
    initialRouteName: "Main",
    headerMode: "none",
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

export default () => (
  <Root>
    <AppNavigator />
  </Root>
);
