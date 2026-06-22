import axios from "axios";
import { getData } from "./storage";


// Coloquei essas alterações, com export const e default, além dos dois valores na constante
// da anon_key só para não quebrar o código. O ideal é padronizar para manter apenas um tipo
// --Emanuel
const base_url = process.env.EXPO_PUBLIC_SUPABASE_URL;
const anon_key = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY; 

export const api = axios.create({
    baseURL: `${base_url}/rest/v1`,
    headers: {
        "Content-Type": "application/json",
        "apikey": anon_key!,
        "Authorization": `Bearer ${anon_key!}`
    }
});

api.interceptors.request.use(async (config) => {
    const token = await getData("@token");
    const bearerToken = typeof token === "string" && token ? token : anon_key;

    config.headers.set("apikey", anon_key!);
    config.headers.set("Authorization", `Bearer ${bearerToken}`);

    return config;
});

export default api;
