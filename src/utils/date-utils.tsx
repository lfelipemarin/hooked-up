import * as dayjs from 'dayjs';

export const parseDateOrCurrent = (date: string): string => {
  if (!date) return 'present';
  return dayjs(date).format('DD/MM/YYYY');
};
