import { useAppSelector } from "../../store";
import { BeneficiaryType } from "../../store/BeneficiaryReducer/types";
import BeneficiaryForm from "./Components/BeneficiaryForm";

const ManageBeneficiary = () => {
  const beneficiaryList = useAppSelector((state) => state);
  console.log(beneficiaryList);
  return (
    <>
      <BeneficiaryForm />
      <ul>
        {beneficiaryList?.map((eachBeneficiary: BeneficiaryType) => {
          const { name, bankName, accountNumber, accountType } =
            eachBeneficiary || {};
          return (
            <li>
              {name},{bankName}, {accountNumber}, {accountType}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ManageBeneficiary;
