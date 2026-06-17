import { Text, View } from "react-native";

import { divisor } from "./style";

export function Divisor() {
    return (
        <View style={divisor.container}>
            <View style={divisor.line} />
            <Text style={divisor.text}>OR</Text>
            <View style={divisor.line} />
        </View>
    );
}
