import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import { JobsScreen } from "../screens";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Jobs" component={JobsScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
