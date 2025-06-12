import { FormDocumentType } from '../types/general/types';

export const yearsDiffCalculator = (d: Date): number => {
  const now = new Date();

  let diff = now.getFullYear() - d.getFullYear();

  if (
    now.getMonth() < d.getMonth() ||
    (now.getMonth() === d.getMonth() && now.getDate() < d.getDate())
  ) {
    diff--;
  }

  return diff;
};

export const lengthByDocType = (d: FormDocumentType): number => {
  const map = {
    passport: 10,
    snils: 11,
    inn: 10 | 12,
  };

  return map[d];
};
