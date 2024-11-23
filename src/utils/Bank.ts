export const formatBank = (bank: string) => {
  if (bank.length <= 4) {
    return bank.toUpperCase();
  }
  return bank.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
};
