import { StyleSheet } from 'react-native';

export const welcomeScreen = StyleSheet.create({
    blur: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    androidBlurFallback: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255,255,255,0.08)',
    },
    gradient:{
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    logoContainer:{
        alignItems: 'center',
        justifyContent: 'center',
    }
});
