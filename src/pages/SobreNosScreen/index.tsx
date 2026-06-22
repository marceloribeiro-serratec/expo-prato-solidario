import React from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Utensils, CircleDollarSign, Users } from "lucide-react-native";
import { ScrollView } from 'react-native-gesture-handler';

import { Title } from '../../components/Title';
import { CardImpact } from '../../components/CardImpact'; 
import { Header } from '../../components/Header'; 
import { COLORS } from '../../constants/colors';

import { aboutScreen } from './style';
const topImg = require('../../../assets/team-banner.png');

export function SobreNosScreen() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <View style={aboutScreen.headerContainer}>
                <Header 
                    title="Prato Solidário" 
                    titleColor={COLORS.red}
                    iconColor={COLORS.red}
                    hiddenIcons={['search', 'refresh', 'plus', 'user']}
                    showMenu={true}
                />
            </View>
            <ScrollView>
                <View style={aboutScreen.bannerSection}>
                    <Image 
                        source={topImg} 
                        style={aboutScreen.bannerImage} 
                        resizeMode="cover" 
                    />
                </View>

                <View style={aboutScreen.contentSection}>
                    <Title color={COLORS.red}>Sobre nós: Muito além de uma refeição</Title>

                    <Text style={aboutScreen.paragraph}>
                        Bem-vindo ao Prato Solidário. Nós acreditamos que a boa gastronomia e a empatia devem sentar à mesma mesa. Nosso propósito é simples e direto: servir refeições de qualidade para você e, ao mesmo tempo, nutrir a nossa comunidade.
                    </Text>

                    <Text style={aboutScreen.paragraph}>
                        Entendemos que a fome é uma realidade urgente, e decidimos que o nosso modelo de negócio precisava fazer parte da solução. Não somos apenas um restaurante ou um sistema de delivery; somos uma rede de apoio conectada pelo alimento.
                    </Text>

                    <Text style={aboutScreen.sectionTitle}>
                        Como seu pedido faz a diferença?
                    </Text>

                    <Text style={aboutScreen.paragraph}>
                        Acreditamos na transparência e no impacto real. Por isso, assumimos um compromisso com você e com a sociedade: 3% de cada compra realizada em nossa plataforma é diretamente revertido para alimentar pessoas em situação de vulnerabilidade.
                    </Text>

                    <Text style={aboutScreen.sectionTitle}>
                        Na prática, funciona assim:
                    </Text>

                    <View style={aboutScreen.cardsContainer}>
                        <CardImpact
                            variant="normal" 
                            title="Você escolhe e saboreia o seu prato favorito."
                            subtitle="Nosso cardápio é feito com carinho." 
                            icon={<Utensils color={COLORS.white} size={30} />}
                        />
                        <CardImpact
                            variant="normal"
                            title="Nós separamos automaticamente 3% do valor."
                            subtitle="Transparência total na doação."
                            icon={<CircleDollarSign color={COLORS.white} size={30} />}
                        />
                        <CardImpact
                            variant="normal"
                            title="Esse valor vira alimento e é distribuído."
                            subtitle="Impactando comunidades locais."
                            icon={<Users color={COLORS.white} size={30} />}
                        />
                    </View>


                    <Text style={aboutScreen.sectionTitle}>
                        Nossa origem
                    </Text>
                    
                    <Text style={aboutScreen.paragraph}>
                        O sistema do Prato Solidário foi idealizado e desenvolvido pela OldDevs. Unimos a tecnologia e a vontade de fazer o bem para criar uma plataforma onde a conveniência do dia a dia se encontra com a responsabilidade social. Queremos provar que a inovação pode e deve ser usada para cuidar das pessoas.
                    </Text>

                    <Text style={aboutScreen.sectionTitle}>
                        Faça parte dessa corrente!
                    </Text>

                    <Text style={aboutScreen.paragraph}>
                        Cada vez que você escolhe o Prato Solidário, você não está apenas matando a sua fome. Você está ativamente contribuindo para que a mesa de outra pessoa também seja farta.
                    </Text>

                    <Text style={aboutScreen.highlightText}>
                        Alimente-se bem. Ajude a alimentar o próximo.
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
