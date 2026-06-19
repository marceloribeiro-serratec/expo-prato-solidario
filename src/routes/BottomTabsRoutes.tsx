import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";

import { HomeScreen } from "@/pages/HomeScreen";
import { HistoryScreen } from "@/pages/HistoryScreen"
import { COLORS } from "@/constants/colors";
import { HistoryIcon, House } from "lucide-react-native";

export type RootTabsParamList = {
    Home: undefined;
    History: undefined;
};

const Tabs = createBottomTabNavigator<RootTabsParamList>();

export function BottomTabsRoutes() {
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: COLORS.black,
                    borderTopColor: COLORS.gray_800,
                },
                tabBarActiveTintColor: COLORS.white,
                tabBarInactiveTintColor: COLORS.gray_500,
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: "600",
                },
                tabBarIcon: ({ focused }) => {
                    /* icones do tabs */
                    const icons = {
                        Home: House,
                        History: HistoryIcon,
                    } as const;

                    const Icon =
                        icons[route.name as keyof typeof icons] ?? House;

                    return (
                        <View
                            style={{
                                width: 44,
                                height: 24,
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 12,
                                backgroundColor: focused
                                    ? COLORS.info_dark
                                    : "transparent",
                            }}
                        >
                            <Icon
                                color={
                                    focused ? COLORS.info_light : COLORS.gray_500
                                }
                                size={21}
                            />
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
        </Tabs.Navigator>
    );
}
