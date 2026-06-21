import { useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { WifiOff } from "lucide-react-native";

import { useAuth } from "@/contexts/AuthContext";
import { COLORS } from "@/constants/colors";
import { styles } from "./style";
import Loading from "@/components/Loading";

export function OfflineScreen() {
    const { checkConnection } = useAuth();
    const [checking, setChecking] = useState(false);

    async function handleTryAgain() {
        setChecking(true);
        await checkConnection();
        setChecking(false);
    }

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <WifiOff color={COLORS.orange} size={48} />
            </View>

            <Text style={styles.title}>Conexao perdida</Text>
            <Text style={styles.description}>
                A conexao com a internet foi perdida e o aplicativo esta
                funcionando offline.
            </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={handleTryAgain}
                disabled={checking}
            >
                {checking ? (
                    <Loading color={COLORS.white} size={24} />
                ) : (
                    <Text style={styles.buttonText}>Tentar novamente</Text>
                )}
            </TouchableOpacity>
        </View>
    );
}
