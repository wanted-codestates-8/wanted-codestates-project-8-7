import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { State } from "pages/forms";

import type { AppState } from "./store";

interface Data {
  [label: string]: {
    type: "text" | "phone" | "address" | "select" | "file" | "agreement";
    value: string | boolean;
  };
}

export interface FormState {
  forms: { id: string; title: string; formList: State[] }[];
  data: { id: string; title: string; dataList: Data[] }[];
}

const initialState: FormState = {
  forms: [
    {
      id: "1",
      title: "테스트 설문지",
      formList: [
        {
          key: "",
          id: "name",
          type: "text",
          required: true,
          label: "이름",
          placeholder: "주민등록상 이름 입력",
        },
        {
          key: "",
          id: "phone",
          type: "phone",
          required: true,
          label: "휴대폰 번호",
        },
        {
          key: "",
          id: "address",
          type: "address",
          required: true,
          label: "배송지",
        },
        {
          key: "",
          id: "input_0",
          type: "select",
          label: "옵션1",
          options: ["S", "L", "XL", "XXL"],
          required: true,
        },
        {
          key: "",
          id: "input_1",
          type: "file",
          label: "첨부파일",
          required: false,
          description: "<p>첨부파일은 위와 같이 입력할 수 있습니다.</p>",
        },
        {
          key: "",
          id: "agreement_0",
          type: "agreement",
          label: "개인정보 수집 약관 동의",
          required: true,
          contents: "<p>(개인정보 수집 및 약관 내용)</p>",
        },
      ],
    },
  ],
  data: [],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addFormData: (
      state,
      {
        payload,
      }: PayloadAction<{ id: string; title: string; formList: State[] }>
    ) => {
      state.forms.push(payload);
    },
    addData: (
      state,
      {
        payload,
      }: PayloadAction<{ id: string; title: string; dataList: Data[] }>
    ) => {
      state.data.push(payload);
    },
  },
});
export const { addFormData, addData } = formSlice.actions;
export const selectForm = (state: AppState) => state.form;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export default formSlice.reducer;
