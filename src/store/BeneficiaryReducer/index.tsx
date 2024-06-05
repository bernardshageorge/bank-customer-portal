import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BeneficiaryType } from "./types";

const beneficiarySlice = createSlice({
  name: "beneficiary",
  initialState: [] as BeneficiaryType[],
  reducers: {
    addBeneficiary: (state, { payload }: PayloadAction<BeneficiaryType>) => {
      state.push(payload);
    },
    updateBeneficiary: (
      state,
      { payload }: PayloadAction<{ idx: number; data: BeneficiaryType }>
    ) => {
      const { idx, data } = payload;
      const updatedState = state.map((sData, index) => {
        if (index === idx) return data;
        return sData;
      });
      state = updatedState;
    },
    deleteBeneficiary: (state, { payload }: PayloadAction<{ idx: number }>) => {
      const { idx } = payload;
      const updatedState = state.filter((_sData, index) => index !== idx);
      state = updatedState;
    },
  },
});
export const { addBeneficiary, updateBeneficiary, deleteBeneficiary } =
  beneficiarySlice.actions;

export default beneficiarySlice.reducer;
