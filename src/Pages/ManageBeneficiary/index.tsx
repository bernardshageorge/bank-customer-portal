import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { BeneficiaryType } from "../../store/BeneficiaryReducer/types";
import BeneficiaryForm from "./Components/BeneficiaryForm";
import { deleteBeneficiary } from "../../store/BeneficiaryReducer";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import Modal from "../../Components/Modal";
import AppLayout from "../../Components/AppLayout";

const ManageBeneficiary = () => {
  const dispatch = useAppDispatch();
  const beneficiaryList = useAppSelector((state) => state.beneficiary);
  const [beneficiaryToUpdate, setBeneficiaryToUpdate] =
    useState<BeneficiaryType | null>(null);
  const [deleteId, setDeleteId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [viewId, setViewId] = useState<BeneficiaryType | null>(null);

  const handleResetEditState = () => {
    setBeneficiaryToUpdate(null);
  };

  return (
    <AppLayout>
      <div className="p-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-bold ">Manage Beneficiary</h1>
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded flex gap-2 items-center text-sm"
            onClick={() => setIsOpen(true)}
          >
            Add Beneficiary <PlusCircleIcon className="w-4 h-4" />
          </button>
        </div>
        <ul className="">
          {beneficiaryList?.map((eachBeneficiary: BeneficiaryType) => {
            const { name, bankName, accountType, id } = eachBeneficiary || {};
            return (
              <li
                key={id}
                className="flex justify-between items-start border-b border-gray-200 py-4"
              >
                <div>
                  <h2 className="text-lg font-semibold">
                    {name}{" "}
                    <span className="border border-gray-300 rounded inline-block text-sm font-thin px-2">
                      {accountType}
                    </span>
                  </h2>
                  <span className="text-sm">{bankName}</span>
                </div>
                <div>
                  <button
                    onClick={() => setViewId(eachBeneficiary)}
                    className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded mr-2 text-sm"
                  >
                    View
                  </button>
                  <button
                    onClick={() => {
                      setIsOpen(true);
                      setBeneficiaryToUpdate(eachBeneficiary);
                    }}
                    className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded mr-2 text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => setDeleteId(id)}
                    className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded text-sm"
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {isOpen && (
        <Modal
          onClose={() => {
            setIsOpen(false);
            handleResetEditState();
          }}
          title={beneficiaryToUpdate ? "Edit Beneficiary" : "Add Beneficiary"}
          className="min-h-screen"
        >
          <BeneficiaryForm
            beneficiaryToUpdate={beneficiaryToUpdate}
            handleResetEditState={handleResetEditState}
            onClose={() => setIsOpen(false)}
          />
        </Modal>
      )}
      {deleteId && (
        <Modal
          title={"Sure, Delete beneficiary?"}
          onClose={() => setDeleteId("")}
          className="min-h-screen"
        >
          <div className="flex gap-2 justify-end">
            <button
              className=" px-4 py-1 text-gray-600 border border-gray-400 rounded"
              onClick={() => setDeleteId("")}
            >
              Cancel
            </button>
            <button
              className=" px-4 py-1 text-white bg-blue-700 rounded"
              onClick={() => {
                dispatch(deleteBeneficiary({ id: deleteId }));
                setDeleteId("");
              }}
            >
              Confirm
            </button>
          </div>
        </Modal>
      )}

      {viewId && (
        <Modal
          title={"Beneficiary"}
          onClose={() => setViewId(null)}
          className="min-h-screen"
        >
          <ul>
            <li className="flex">
              <span className="font-bold mr-2 w-1/3">Name:</span>
              <span>{viewId?.name}</span>
            </li>
            <li className="flex">
              <span className="font-bold mr-2 w-1/3">Account Number:</span>
              <span>{viewId?.accountNumber}</span>
            </li>
            <li className="flex">
              <span className="font-bold mr-2 w-1/3">Bank Name:</span>
              <span>{viewId?.bankName}</span>
            </li>
            <li className="flex">
              <span className="font-bold mr-2 w-1/3">Account Type:</span>
              <span>{viewId?.accountType}</span>
            </li>
          </ul>
        </Modal>
      )}
    </AppLayout>
  );
};

export default ManageBeneficiary;
