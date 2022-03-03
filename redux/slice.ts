import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { State } from "pages/forms";

import type { AppState } from "./store";

export interface FormState {
  forms: { title: string; formList: State[] }[];
  data: {}[];
}

const initialState: FormState = {
  forms: [],
  data: [],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addFormData: (state, { payload }: PayloadAction<{ title: string; formList: State[] }>) => {
      state.forms.push(payload);
    },
  },
});

export const { addFormData } = formSlice.actions;
export const selectForm = (state: AppState) => state.form;
export default formSlice.reducer;
