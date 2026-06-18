import { LoginScreen } from "@/pages/LoginScreen";
import { WelcomeScreen } from "@/pages/WelcomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabsRoutes } from "./BottomTabsRoutes";
import { RootStackParamList } from "./type";
import { RegisterScreen } from "@/pages/RegisterScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function StackRoutes() {
    return (
        <Stack.Navigator initialRouteName="login">
            <Stack.Screen
                name="welcome"
                component={WelcomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="login"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="home"
                component={BottomTabsRoutes}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="register"
                component={RegisterScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
