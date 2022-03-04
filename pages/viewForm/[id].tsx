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
    <FormWrapper>
      <Header> Title</Header>
      <Name
        label={testForm.label}
        placeholder={testForm.placeholder ? testForm.placeholder : ""}
        onChangeName={onChangeName}
        name={name}
      />
      <PhoneNum label={testForm.label} /> <Address /> <DropDown />
      <Attachments /> <Policy /> <Submit> 제출하기</Submit>
    </FormWrapper>
  );
};
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.5rem 2.5rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Submit = styled.button`
  width: 100px;
  height: 50px;
`;

export default GeneratedForm;
