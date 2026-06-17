import { HomeScreen } from "@/pages/HomeScreen";
import { LoginScreen } from "@/pages/LoginScreen";
import { WelcomeScreen } from "@/pages/WelcomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabsRoutes } from "./BottomTabsRoutes";

export type RootStackParamList = {
    login: undefined;
    home: undefined;
    welcome: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function StackRoutes() {
    return (
        <Stack.Navigator initialRouteName="welcome">
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
                name="welcome"
                component={WelcomeScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
