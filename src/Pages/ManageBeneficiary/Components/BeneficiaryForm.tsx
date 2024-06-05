import { useForm } from "react-hook-form";
import { BeneficiaryType } from "../../../store/BeneficiaryReducer/types";
import { useAppDispatch } from "../../../store";
import { addBeneficiary } from "../../../store/BeneficiaryReducer";

export default function BeneficiaryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BeneficiaryType>();
  const dispatch = useAppDispatch();
  const onSubmit = handleSubmit((data) => {
    dispatch(addBeneficiary(data));
    reset();
  });
  console.log(errors, "errors");

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Name</label>
        <input {...(register("name"), { required: true })} />
      </div>
      <div>
        <label>Account Number</label>
        <input {...(register("accountNumber"), { required: true })} />
      </div>
      <div>
        <label>Bank Name</label>
        <input {...register("bankName")} />
      </div>
      <div>
        <label>Account Type</label>
        <select {...register("accountType")}>
          <option value="saving">Saving</option>
          <option value="current">current</option>
        </select>
      </div>
      <button>Add Beneficiary</button>
    </form>
  );
}
