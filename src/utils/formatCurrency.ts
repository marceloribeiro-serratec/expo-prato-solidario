export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

export const calculateSocialContribution = (value: number): number => {
  const SOCIAL_PERCENTAGE = 0.03;
  return value * SOCIAL_PERCENTAGE;
};