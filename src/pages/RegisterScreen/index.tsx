import { Text, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Subtitle } from '@/components/Subtitle';
import { PageContainerImage } from '@/components/PageContainerImage';
import { LogoImage } from '@/components/LogoImage';
import { Title } from '@/components/Title';
import { Button } from '@/components/Button';

import { COLORS } from '@/constants/colors';

import { loginScreen } from './style';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '@/routes/type';

export function RegisterScreen() {

    const navigation = useNavigation<NavigationProps>();

     return (
        <PageContainerImage>
            <LinearGradient
                colors={[
                    "rgba(255,255,255,0.9)",
                    "rgba(255,255,255,0.5)",
                    "rgba(255,255,255,0.9)",
                ]}
                style={loginScreen.gradient}
            >
                <View style={loginScreen.container}>
                    <View style={loginScreen.logoContainer}>
                        <LogoImage iconSize={40} />
                    </View>
                    <View style={loginScreen.titleContainer}>
                        <Title size={28} color={COLORS.red} fontWeight="bold">
                            Prato Solidário
                        </Title>
                    </View>

                    <View style={loginScreen.subtitleContainer}>
                        
                    </View>

                    <View style={{ marginTop: 60, alignItems: "center" }}>
                        <Subtitle color={COLORS.black} fontSize={14}>
                            Não tem uma conta?
                        </Subtitle>
                        <Button color={COLORS.transparent} onPress={() => navigation.navigate("Register")}>
                            <Title color={COLORS.red}>
                                Criar conta
                            </Title>
                        </Button>
                    </View>
                </View>
            </LinearGradient>
        </PageContainerImage>
     )
}