import { Gender } from '../general/types';

export interface ClientInfo {
  firstName: string;
  lastName: string;
  middleName?: string;
  gender: Gender;
  birthDate: Date;
  email: string;
  phone: string;
  passport: string;
}
