import { AccountTypeEnum } from "./enum";

export type BeneficiaryType = {
  id?: string;
  name: string;
  accountNumber: number;
  bankName: string;
  accountType: AccountTypeEnum;
};
