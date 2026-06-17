import { View } from 'react-native'
import { Title } from '../Title';

import { COLORS } from '@/constants/colors';
import { CirclePlus, CircleUserRound, RefreshCcw, Search, User } from 'lucide-react-native';

import { header } from './style';

export function Header() {
    return (
        <View style={header.container}>
            <Title color={COLORS.white} size={20}>
                Home
            </Title>
            <View style={header.containerIcons}>
                <Search color={COLORS.info_medium} size={20} />
                <RefreshCcw color={COLORS.info_medium} size={16} />
                <CirclePlus color={COLORS.info_medium} size={20} />
                <CircleUserRound color={COLORS.info_medium} size={20} />
            </View>
        </View>
    )
}