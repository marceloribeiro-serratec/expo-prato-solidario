import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";

import { HomeScreen } from "@/pages/HomeScreen";
import { HistoryScreen } from "@/pages/HistoryScreen";
import { COLORS } from "@/constants/colors";
import {
    BookOpenIcon,
    HistoryIcon,
    House,
    Utensils,
} from "lucide-react-native";
import { SobreNosScreen } from "@/pages/SobreNosScreen";
import ProdutosScreen from "@/pages/ProdutosScreen";

export type RootTabsParamList = {
    Home: undefined;
    History: undefined;
    Sobre: undefined;
    Menu: undefined;
};

const Tabs = createBottomTabNavigator<RootTabsParamList>();

export function BottomTabsRoutes() {
    return (
        <Tabs.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: COLORS.white,
                    borderTopColor: COLORS.gray_600,
                },
                tabBarActiveTintColor: COLORS.red,
                tabBarInactiveTintColor: COLORS.gray_600,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => {
                    /* icones do tabs */
                    const icons = {
                        Home: House,
                        Menu: Utensils,
                        History: HistoryIcon,
                        Sobre: BookOpenIcon,
                    } as const;

                    const Icon =
                        icons[route.name as keyof typeof icons] ?? House;

                    return (
                        <View
                            style={{
                                marginTop: 36,
                                marginBottom: 18,
                                width: 72,
                                height: 46,
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 24,
                                backgroundColor: focused
                                    ? COLORS.red
                                    : COLORS.transparent,
                            }}
                        >
                            <Icon
                                color={focused ? COLORS.white : COLORS.gray_400}
                                size={21}
                            />
                            <Text
                                style={{
                                    color: focused
                                        ? COLORS.white
                                        : COLORS.gray_400,
                                    fontSize: 12,
                                    fontWeight: focused ? "800" : "400",
                                }}
                            >
                                {route.name}
                            </Text>
                        </View>
                    );
                },
            })}
        >
            <Tabs.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Tabs.Screen
                name="History"
                component={HistoryScreen}
                options={{ headerShown: false }}
            />
            <Tabs.Screen
                name="Sobre"
                component={SobreNosScreen}
                options={{ headerShown: false }}
            />
            <Tabs.Screen
                name="Menu"
                component={ProdutosScreen}
                options={{ headerShown: false }}
            />
        </Tabs.Navigator>
    );
}
