import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { State } from "pages/forms";

import type { AppState } from "./store";

export interface Data {
  [label: string]: {
    type: string;
    value: string | boolean;
  };
}

export interface FormState {
  forms: { id: string; title: string; formList: State[] }[];
  data: { id: string; title: string; dataList: Data[] }[];
}

const initialState: FormState = {
  forms: [],
  data: [],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addFormData: (
      state,
      { payload }: PayloadAction<{ id: string; title: string; formList: State[] }>
    ) => {
      state.forms.push(payload);
    },
    addData: (
      state,
      { payload }: PayloadAction<{ id: string; title: string; dataList: Data[] }>
    ) => {
      const targetIdx = state.data.findIndex((data) => data.id === payload.id);
      if (targetIdx >= 0) {
        state.data[targetIdx].dataList.push(payload.dataList[0]);
      } else {
        state.data.push(payload);
      }
    },
  },
});
export const { addFormData, addData } = formSlice.actions;
export const selectForm = (state: AppState) => state.form;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export default formSlice.reducer;
