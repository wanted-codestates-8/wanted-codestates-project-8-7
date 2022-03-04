import React, { useState } from "react";
import Name from "components/GeneratedForm/Name";
import styled from "styled-components";
import PhoneNum from "components/GeneratedForm/PhoneNum";
import Address from "components/GeneratedForm/Address";
import Options from "components/GeneratedForm/Options";
import Attachments from "components/GeneratedForm/Attachments";
import Policy from "components/GeneratedForm/Policy";
import { useRouter } from "next/router";
import DropDown from "components/GeneratedForm/DropDown";

export interface State {
  idx: number;
  id: string;
  type: string;
  required: boolean;
  label: string;
  placeholder?: string;
  options?: string[];
  description?: string;
  contents?: string;
}

const testForm: State = {
  idx: 1,
  id: "name",
  type: "text",
  required: true,
  label: "이름",
  placeholder: "주민등록상 이름 입력" || undefined,
};

const GeneratedForm = () => {
  const router = useRouter();
  const { id } = router.query;
  const [form, setForm] = useState([]);
  const [name, setName] = useState("");
  const [isSubmitName, setIsSubmitName] = useState(false);
  const [imgData, setImgData] = useState();
  console.log(imgData, 1);
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    //setForm(...form, name)
  };

  const submitName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSubmitName(true);
  };

  const [number, setNumber] = useState("");
  const onChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };

  const onSubmit = () => {
    console.log(form);
  };

  return (
    <>
      <FormWrapper>
        <Header>데이터블 폼</Header>
        <Name
          label={testForm.label}
          placeholder={testForm.placeholder ? testForm.placeholder : ""}
          onChangeName={onChangeName}
          name={name}
        />
        <PhoneNum label={testForm.label} />
        <Address />
        <DropDown />
        <Attachments setImgData={setImgData} />
        <Policy />
        <SubmitWrap>
          <Submit> 제출하기</Submit>
        </SubmitWrap>
      </FormWrapper>
    </>
  );
};
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  height: 100vh;
  /* padding: 1rem 1.5rem 2.5rem; */
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  font-size: 16px;
`;

const SubmitWrap = styled.div`
  margin-top: auto;
  position: sticky;
  bottom: 0;
  padding: 10px;
  box-shadow: 0 -2px 20px 0 rgba(14, 67, 97, 0.06),
    0 1px 0 0 rgba(14, 67, 97, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  background: #e9e9e9;
`;

const Submit = styled.button`
  background-color: salmon;
  width: 400px;
  margin-top: auto;
  height: 52px;
  color: white;
  border-radius: 10px;
`;

export default GeneratedForm;
