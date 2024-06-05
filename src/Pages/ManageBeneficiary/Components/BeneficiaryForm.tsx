import { useForm } from "react-hook-form";
import { BeneficiaryType } from "../../../store/BeneficiaryReducer/types";
import { useAppDispatch } from "../../../store";
import {
  addBeneficiary,
  updateBeneficiary,
} from "../../../store/BeneficiaryReducer";
import { useEffect, useState } from "react";
import Modal from "../../../Components/Modal";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AccountTypeEnum } from "../../../store/BeneficiaryReducer/enum";

// yup schema

const schema = yup.object().shape({
  id: yup.string(),
  name: yup.string().required("Name is a required field"),
  accountNumber: yup
    .number()
    .required("Account number is a required field")
    .typeError("Please enter account number here"),
  bankName: yup.string().required("Bank name is a required field"),
  accountType: yup
    .mixed<AccountTypeEnum>()
    .oneOf(Object.values(AccountTypeEnum), "Please select valid account type")
    .required("Account type is a required field"),
});

export default function BeneficiaryForm({
  beneficiaryToUpdate,
  handleResetEditState,
  onClose,
}: {
  beneficiaryToUpdate: BeneficiaryType | null;
  handleResetEditState: () => void;
  onClose: () => void;
}) {
  const [beneficiaryData, setBeneficiaryData] =
    useState<BeneficiaryType | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BeneficiaryType>({
    mode: "onChange",
    ...(beneficiaryToUpdate ? { defaultValues: beneficiaryToUpdate } : {}),
    resolver: yupResolver(schema),
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (beneficiaryToUpdate) {
      reset(beneficiaryToUpdate);
    }
  }, [beneficiaryToUpdate, reset]);

  const onSubmit = handleSubmit((data) => {
    setBeneficiaryData(data);
    // if (beneficiaryToUpdate) {
    //   dispatch(updateBeneficiary({ data }));
    //   handleResetEditState();
    // } else {
    //   dispatch(addBeneficiary(data));
    // }
    // reset();
    // onClose();
  });

  const handleConfirm = () => {
    if (beneficiaryToUpdate) {
      dispatch(updateBeneficiary({ data: beneficiaryData as BeneficiaryType }));
      handleResetEditState();
    } else {
      dispatch(addBeneficiary(beneficiaryData as BeneficiaryType));
    }
    reset();
    onClose();
  };

  console.log(errors, "errors");
  return (
    <>
      <form
        onSubmit={onSubmit}
        className="space-y-6 bg-white rounded-lg w-full"
      >
        <div className="flex flex-col relative">
          <label className="mb-2 text-sm font-medium text-gray-700 text-left">
            Name
          </label>
          <input
            {...register("name")}
            className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
          {errors?.name?.message && (
            <ErrorMessage message={errors?.name?.message} />
          )}
        </div>
        <div className="flex flex-col relative">
          <label className="mb-2 text-sm font-medium text-gray-700 text-left">
            Account Number
          </label>
          <input
            {...register("accountNumber")}
            className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter account number"
          />
          {errors?.accountNumber?.message && (
            <ErrorMessage message={errors?.accountNumber?.message} />
          )}
        </div>
        <div className="flex flex-col relative">
          <label className="mb-2 text-sm font-medium text-gray-700 text-left">
            Bank Name
          </label>
          <input
            {...register("bankName")}
            className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter bank name"
          />
          {errors?.bankName?.message && (
            <ErrorMessage message={errors?.bankName?.message} />
          )}
        </div>
        <div className="flex flex-col text-left relative">
          <label className="mb-2 text-sm font-medium text-gray-700">
            Account Type
          </label>
          <select
            {...register("accountType")}
            className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Select Account Type" disabled selected>
              Select Account Type
            </option>
            <option value="saving">Saving</option>
            <option value="current">Current</option>
          </select>
          {errors?.accountType?.message && (
            <ErrorMessage message={errors?.accountType?.message} />
          )}
        </div>
        <button className="w-full px-4 py-2 font-semibold text-white bg-blue-700 rounded !mt-8">
          {beneficiaryToUpdate ? "Update Beneficiary" : "Add Beneficiary"}
        </button>
      </form>

      {beneficiaryData && (
        <Modal
          title={
            beneficiaryToUpdate
              ? "Sure, Update beneficiary?"
              : "Sure, Add beneficiary?"
          }
          onClose={() => setBeneficiaryData(null)}
        >
          <div className="flex gap-2 justify-end">
            <button
              className=" px-4 py-1 text-gray-600 border border-gray-400 rounded"
              onClick={() => setBeneficiaryData(null)}
            >
              Cancel
            </button>
            <button
              className=" px-4 py-1 text-white bg-blue-700 rounded"
              onClick={handleConfirm}
            >
              Confirm
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}

const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <span className="text-red-400 text-xs block text-left absolute -bottom-5">
      {message}
    </span>
  );
};
