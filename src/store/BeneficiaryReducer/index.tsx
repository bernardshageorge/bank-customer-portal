import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BeneficiaryType } from "./types";
import { v4 as uuidv4 } from "uuid";

const beneficiarySlice = createSlice({
  name: "beneficiary",
  initialState: { beneficiary: [] as BeneficiaryType[] },
  reducers: {
    addBeneficiary: (state, { payload }: PayloadAction<BeneficiaryType>) => {
      const id = uuidv4();
      const newData = { ...payload, id };
      console.log(newData);
      state.beneficiary.push(newData);
    },
    updateBeneficiary: (
      state,
      { payload }: PayloadAction<{ data: BeneficiaryType }>
    ) => {
      const { data } = payload;
      const updatedState = state.beneficiary.map((sData) => {
        if (sData.id === data.id) return data;
        return sData;
      });
      console.log(updatedState, "updatedState");
      state.beneficiary = updatedState;
    },
    deleteBeneficiary: (state, { payload }: PayloadAction<{ id: string }>) => {
      const { id } = payload;
      const updatedState = state.beneficiary.filter((sData) => id !== sData.id);
      state.beneficiary = updatedState;
    },
  },
});
export const { addBeneficiary, updateBeneficiary, deleteBeneficiary } =
  beneficiarySlice.actions;

export default beneficiarySlice.reducer;
