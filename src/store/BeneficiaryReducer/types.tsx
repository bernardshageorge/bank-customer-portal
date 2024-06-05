import { AccountTypeEnum } from "./enum";

export type BeneficiaryType = {
  name: string;
  accountNumber: number;
  bankName: string;
  accountType: AccountTypeEnum;
};
