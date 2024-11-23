import {TransactionItem} from '@/types';

export const transactionFilter = (
  items: TransactionItem[] = [],
  filteredBy: string = '',
): TransactionItem[] => {
  if (!filteredBy.trim()) {
    return items;
  }

  const tempItems = [...items];

  const escapedFilter = escapeRegExp(filteredBy);
  const filteredItems =
    tempItems?.filter(item => {
      return [
        'beneficiary_name',
        'sender_bank',
        'beneficiary_bank',
        'amount',
      ].some(key => {
        const value = item[key as keyof TransactionItem];
        if (typeof value === 'number') {
          return value.toString().includes(escapedFilter);
        } else if (typeof value === 'string') {
          return value.match(new RegExp(escapedFilter, 'i'));
        }
        return false;
      });
    }) ?? [];

  return filteredItems;
};

function escapeRegExp(text: string = ''): string {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
