import { supabase } from "./supabase";
import { File } from "expo-file-system";
import { decode } from "base64-arraybuffer";

const BUCKET_NAME = "produtos";

export const bucketProdutosService = {
    async uploadProdutoImagem(uri: string): Promise<string> {
        const file = new File(uri);
        const base64 = await file.base64();

        const extensao = uri.split(".").pop()?.toLowerCase() || "jpg";
        const mimeType = extensao === "png" ? "image/png" : "image/jpeg";
        const caminho = `${Date.now()}.${extensao}`;

        const arrayBuffer = decode(base64);

        const { error } = await supabase.storage
            .from(BUCKET_NAME)
            .upload(caminho, arrayBuffer, {
                contentType: mimeType,
                upsert: false,
            });

        if (error) {
            throw error;
        }

        const { data } = supabase.storage
            .from(BUCKET_NAME)
            .getPublicUrl(caminho);

        return data.publicUrl;
    },
};