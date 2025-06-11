import { FormDocumentType } from '../types/general/types';

export const yearsDiffCalculator = (d: Date): number => {
  const now = new Date();

  // if this statement true - need to remove 1 from current year diff
  const needToRemoveOne =
    now.getMonth() - d.getMonth() < 0 && now.getDate() - d.getDate() < 0;

  const diff = now.getFullYear() - d.getFullYear();
  return diff - (needToRemoveOne ? 1 : 0);
};

export const lengthByDocType = (d: FormDocumentType): number => {
  const map = {
    passport: 10,
    snils: 11,
    inn: 10 | 12,
  };

  return map[d];
};
