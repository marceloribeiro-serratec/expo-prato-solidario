import { View } from "react-native";

import { line} from "./style";

export function Line() {
    return (
        <View style={line.container}>
            <View style={line.line} />
        </View>
    );
}
