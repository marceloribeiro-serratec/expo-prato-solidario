import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { bucketProdutosService } from '@/services/bucketProdutosService';
import { toastErro, toastSucesso } from '@/utils/toast';

export function useCamera(onUrlReady?: (url: string) => void) {
    const [imagemProduto, setImagemProduto] = useState<string | null>(null);
    const [imagemProdutoUrl, setImagemProdutoUrl] = useState<string | null>(null);

    const abrirCamera = async () => {
        const permissao = await ImagePicker.requestCameraPermissionsAsync();

        if (!permissao.granted) {
            toastErro("Sem permissão para acessar a câmera");
            return;
        }

        const resultado = await ImagePicker.launchCameraAsync({
            mediaTypes: ['images'],
            quality: 0.8,
            allowsEditing: true,
        });

        if (!resultado.canceled) {
            const uri = resultado.assets[0].uri;
            setImagemProduto(uri);

            try {
                const url = await bucketProdutosService.uploadProdutoImagem(uri);
                setImagemProdutoUrl(url);
                onUrlReady?.(url);
                toastSucesso("Imagem enviada!");
            } catch (error) {
                toastErro("Erro ao enviar imagem");
            }
        }
    };

    const limparImagem = () => {
        setImagemProduto(null);
        setImagemProdutoUrl(null);
        onUrlReady?.('');
    };

    return { imagemProduto, imagemProdutoUrl, abrirCamera, limparImagem };
}