import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Root from "./Components/Root";
import AboutScreen from "./Components/Screens/AboutScreen/AboutScreen";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerStyle: {backgroundColor: "tomato"}}}>
      <Stack.Screen name="Home" options={{title: "OverView"}}>
        {(props) => <Root {...props} extraData={"someData"} />}
      </Stack.Screen>
      <Stack.Screen name="About" component={AboutScreen}></Stack.Screen>
    </Stack.Navigator>
  )
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}

export default Navigation