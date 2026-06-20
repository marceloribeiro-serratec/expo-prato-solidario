import { Image, Text, View } from "react-native";
import { Title } from "../Title";
import { Subtitle } from "../Subtitle";
import { Badge } from "../Badge";
import { emphasisCard } from "./style";
import { ButtonRounded } from "../ButtonRounded";

import { COLORS } from "@/constants";
import { EmphasisCardProps } from "./type";

export function EmphasisCard({
    id,
    image,
    title,
    price,
    description,
    time,
}: EmphasisCardProps) {
    return (
        <View style={emphasisCard.container} key={id}>
            <Image
                source={image}
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
                        {title}
                    </Title>

                    <Title color={COLORS.red} size={24}>
                        {price}
                    </Title>
                </View>

                <Subtitle color={COLORS.black} fontSize={18} fontWeight="400">
                    {description}
                </Subtitle>

                <View style={emphasisCard.footer}>
                    <Subtitle
                        color={COLORS.black}
                        fontSize={14}
                        fontWeight="400"
                        style={emphasisCard.timeText}
                    >
                        {time}
                    </Subtitle>

                    <ButtonRounded
                        color={COLORS.red}
                        style={emphasisCard.addButton}
                    >
                        <Title color={COLORS.white} size={16} fontWeight="600">
                            Adicionar
                        </Title>
                    </ButtonRounded>
                </View>
            </View>
        </View>
    );
}
