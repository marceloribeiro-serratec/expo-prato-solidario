import { COLORS } from "@/constants";
import { homeScreen } from "@/pages/HomeScreen/style";
import { View, Text, Image } from "react-native";
import { Title } from "../Title";

export function EmphasisCard() {
    return (
        <View
            style={{
                width: "100%",
                height: 386,
                backgroundColor: COLORS.gray_100,
                borderRadius: 12,
                alignItems: "center",
                borderColor: COLORS.gray_300,
                borderWidth: 1,
                shadowColor: COLORS.black,
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.1,
                elevation: 3,
                overflow: "hidden",
            }}
        >
            <Image
                source={require("../../../assets/strognoff.png")}
                style={{
                    width: "100%",
                    height: 200,
                    alignSelf: "center",
                }}
                resizeMode="cover"
            />
            <View
                style={{
                    marginHorizontal: 20,
                    marginVertical: 24,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <Title color={COLORS.black} size={28}>
                    Strogonoff{"\n"}Clássico
                </Title>
                <Title color={COLORS.red} size={24}>
                    R$ {"\n"}34,90
                </Title>
            </View>
        </View>
    );
}
