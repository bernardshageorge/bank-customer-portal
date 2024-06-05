import { useForm } from "react-hook-form";
import { BeneficiaryType } from "../../../store/BeneficiaryReducer/types";
import { useAppDispatch } from "../../../store";
import {
  addBeneficiary,
  updateBeneficiary,
} from "../../../store/BeneficiaryReducer";
import { useEffect, useState } from "react";
import Modal from "../../../Components/Modal";

export default function BeneficiaryForm({
  beneficiaryToUpdate,
  handleResetEditState,
  onClose,
}: {
  beneficiaryToUpdate: BeneficiaryType | null;
  handleResetEditState: () => void;
  onClose: () => void;
}) {
  const { register, handleSubmit, reset } = useForm<BeneficiaryType>({
    ...(beneficiaryToUpdate ? { defaultValues: beneficiaryToUpdate } : {}),
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (beneficiaryToUpdate) {
      reset(beneficiaryToUpdate);
    }
  }, [beneficiaryToUpdate, reset]);

  const onSubmit = handleSubmit((data) => {
    if (beneficiaryToUpdate) {
      dispatch(updateBeneficiary({ data }));
      handleResetEditState();
    } else {
      dispatch(addBeneficiary(data));
    }
    reset();
    onClose();
  });

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsOpen(true);
        }}
        className="space-y-4 bg-white rounded-lg w-full"
      >
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-700">Name</label>
          <input
            {...register("name")}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-700">
            Account Number
          </label>
          <input
            {...register("accountNumber")}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter account number"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-700">
            Bank Name
          </label>
          <input
            {...register("bankName")}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter bank name"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-700">
            Account Type
          </label>
          <select
            {...register("accountType")}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Select Account Type" disabled selected>
              Select Account Type
            </option>
            <option value="saving">Saving</option>
            <option value="current">Current</option>
          </select>
        </div>
        <button className="w-full px-4 py-2 font-semibold text-white bg-blue-700 rounded">
          {beneficiaryToUpdate ? "Update Beneficiary" : "Add Beneficiary"}
        </button>
      </form>

      {isOpen && (
        <Modal
          title={
            beneficiaryToUpdate
              ? "Sure, Update beneficiary?"
              : "Sure, Add beneficiary?"
          }
          onClose={() => setIsOpen(false)}
        >
          <div className="flex gap-2 justify-end">
            <button
              className=" px-4 py-1 text-gray-600 border border-gray-400 rounded"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
            <button
              className=" px-4 py-1 text-white bg-blue-700 rounded"
              onClick={onSubmit}
            >
              Confirm
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
