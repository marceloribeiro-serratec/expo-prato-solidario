import axios from "axios";

const base_url = process.env.EXPO_PUBLIC_SUPABASE_URL;
const anon_key = process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const api = axios.create({
    baseURL: `${base_url}/rest/v1`,
    headers: {
        "Content-Type": "application/json",
        "apikey": anon_key,
        "Authorization": `Bearer ${anon_key}`
    }
});