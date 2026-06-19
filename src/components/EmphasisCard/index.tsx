import { COLORS } from "@/constants";
import { View, Text, Image } from "react-native";
import { Title } from "../Title";
import { Subtitle } from "../Subtitle";
import { Badge } from "../Badge";
import { emphasisCard } from "./style";
import { ButtonRounded } from "../ButtonRounded";

export function EmphasisCard() {
    return (
        <View
            style={emphasisCard.container}
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
            <View style={emphasisCard.badge}>
                <Badge color={COLORS.green_dark}>
                    <Text style={emphasisCard.badgeText}>Impacto Social</Text>
                </Badge>
            </View>
            <View
                style={{
                    marginHorizontal: 20,
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        gap: 130,
                    }}
                >
                    <Title color={COLORS.black} size={28}>
                        Strogonoff{"\n"}Clássico
                    </Title>
                    <Title color={COLORS.red} size={24}>
                        R${"\n"}34,90
                    </Title>
                </View>
                <Subtitle color={COLORS.black} fontSize={18} fontWeight="400">
                    Carne selecionada, arroz e...
                </Subtitle>
                <View style={emphasisCard.footer}>
                    <Subtitle
                        color={COLORS.black}
                        fontSize={14}
                        fontWeight="400"
                        style={emphasisCard.timeText}
                    >
                        25-35 min
                    </Subtitle>
                    <ButtonRounded color={COLORS.red} style={emphasisCard.addButton}>
                        <Title color={COLORS.white} size={16} fontWeight="600">
                            Adicionar
                        </Title>
                    </ButtonRounded>
                </View>
            </View>
        </View>
    );
}
