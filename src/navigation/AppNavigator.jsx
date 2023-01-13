// stack navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import { AddJobScreen, JobDetailScreen, JobsScreen } from "../screens";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Jobs" component={JobsScreen} />
      <Stack.Screen name="AddJob" component={AddJobScreen} />
      <Stack.Screen name="JobDetails" component={JobDetailScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
