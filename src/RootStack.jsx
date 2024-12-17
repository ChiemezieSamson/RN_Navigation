import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Root from "./Components/Root";
import AboutScreen from "./Components/Screens/AboutScreen/AboutScreen";
import CreatePostScreen from "./Components/Screens/CreatePostScreen/CreatePostScreen";
import ProfileScreen from "./Components/Screens/ProfileScreen/ProfileScreen";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerStyle: {backgroundColor: "tomato"}}}>
      <Stack.Screen name="Home" options={{title: "OverView"}} component={Root}></Stack.Screen>
      <Stack.Screen name="About" component={AboutScreen} initialParams={{itemId: 42}}></Stack.Screen>
      <Stack.Screen name="CreatePost" component={CreatePostScreen}></Stack.Screen>
      <Stack.Screen name="Profile" component={ProfileScreen} options={({route}) => ({title: route.params})}></Stack.Screen>
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