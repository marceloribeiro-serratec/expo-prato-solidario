import { Produto } from "@/pages/ProdutosScreen/type";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export type RootStackParamList = {
    login: undefined;
    home: undefined;
    welcome: undefined;
    register: undefined;
    control: undefined;
    product: undefined;
    cart: undefined;
    admin: undefined;
    
    detalhesProduto: {
        produto: Produto;
    };
};
