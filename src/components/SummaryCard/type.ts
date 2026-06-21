import { LucideIcon } from 'lucide-react-native';

export interface SummaryCardProps {
    title: string;
    value: string;
    type?: 'sold' | 'orders' | 'average' | 'social';
    meta?: string;
    Icon?: LucideIcon;
}