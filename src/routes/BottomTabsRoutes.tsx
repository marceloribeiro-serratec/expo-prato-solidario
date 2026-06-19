import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Pressable, Text, View } from "react-native";

import { HomeScreen } from "@/pages/HomeScreen";
import { HistoryScreen } from "@/pages/HistoryScreen";
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
                    backgroundColor: COLORS.white,
                    borderTopColor: COLORS.gray_600,
                },
                tabBarActiveTintColor: COLORS.red,
                tabBarInactiveTintColor: COLORS.gray_600,
                tabBarButton: ({
                    accessibilityState,
                    children,
                    ref: _ref,
                    style,
                    ...props
                }) => {
                    const focused = accessibilityState?.selected;

                    return (
                        <Pressable
                            {...props}
                            accessibilityState={accessibilityState}
                            style={[
                                style,
                                {
                                    borderTopColor: focused
                                        ? COLORS.red
                                        : COLORS.transparent,
                                    borderTopWidth: focused ? 4 : 1,
                                },
                            ]}
                        >
                            {children}
                        </Pressable>
                    );
                },
                tabBarLabel: ({ color, focused }) => {
                    return (
                        <Text
                            style={{
                                color: focused ? COLORS.red : COLORS.gray_400,
                                fontSize: 12,
                                fontWeight: focused ? "800" : "400",
                            }}
                        >
                            {route.name}
                        </Text>
                    );
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
                                height: 28,
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 12,
                                backgroundColor: focused
                                    ? COLORS.red
                                    : "transparent",
                            }}
                        >
                            <Icon
                                color={
                                    focused
                                        ? COLORS.info_light
                                        : COLORS.gray_400
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
