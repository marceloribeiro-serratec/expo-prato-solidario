import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

import { COLORS } from "@/constants/colors";
import { getData, storeData } from "@/services/storage";

type ThemeMode = "light" | "dark";

type ThemeColors = {
    background: string;
    surface: string;
    border: string;
    text: string;
    mutedText: string;
    iconBackground: string;
    dangerBackground: string;
    activeBackground: string;
    drawerText: string;
};

type ThemeContextData = {
    mode: ThemeMode;
    isDarkMode: boolean;
    colors: ThemeColors;
    setDarkMode: (enabled: boolean) => void;
    toggleDarkMode: () => void;
};

type ThemeProviderProps = {
    children: ReactNode;
};

const THEME_STORAGE_KEY = "@theme_mode";

const lightColors: ThemeColors = {
    background: COLORS.gray_100,
    surface: COLORS.white,
    border: COLORS.gray_200,
    text: COLORS.gray_700,
    mutedText: COLORS.gray_500,
    iconBackground: COLORS.green_light,
    dangerBackground: COLORS.danger_light,
    activeBackground: COLORS.success_light,
    drawerText: COLORS.brown,
};

const darkColors: ThemeColors = {
    background: "#121212",
    surface: "#1E1E1E",
    border: "#2D2D2D",
    text: "#F5F5F5",
    mutedText: "#B8B8B8",
    iconBackground: "#143C28",
    dangerBackground: "#3A1717",
    activeBackground: "#143C28",
    drawerText: "#F5F5F5",
};

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [mode, setMode] = useState<ThemeMode>("light");

    useEffect(() => {
        async function loadTheme() {
            const storedMode = await getData(THEME_STORAGE_KEY);

            if (storedMode === "dark" || storedMode === "light") {
                setMode(storedMode);
            }
        }

        loadTheme();
    }, []);

    function setDarkMode(enabled: boolean) {
        const nextMode: ThemeMode = enabled ? "dark" : "light";
        setMode(nextMode);
        storeData(THEME_STORAGE_KEY, nextMode);
    }

    function toggleDarkMode() {
        setDarkMode(mode !== "dark");
    }

    const value = useMemo(
        () => ({
            mode,
            isDarkMode: mode === "dark",
            colors: mode === "dark" ? darkColors : lightColors,
            setDarkMode,
            toggleDarkMode,
        }),
        [mode]
    );

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
