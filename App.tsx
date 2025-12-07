import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";
import HomeScreen from "./components/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{ title: "Giriş Yap" }}
        />

        <Stack.Screen 
          name="Register" 
          component={RegisterScreen}
          options={{ title: "Kayıt Ol" }}
        />

        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: "Home" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
