import React, { useEffect, useRef, useState } from "react";
import Name from "components/GeneratedForm/Name";
import styled from "styled-components";
import PhoneNum from "components/GeneratedForm/PhoneNum";
import Address from "components/GeneratedForm/Address";
import Attachments from "components/GeneratedForm/Attachments";
import Policy from "components/GeneratedForm/Policy";
import { useRouter } from "next/router";
import DropDown from "components/GeneratedForm/DropDown";
import { useAppSelector } from "redux/slice";
import { AddrObj } from "types/address";

const testForm = {
  title: "폼 예시",
  data: {
    key: "1",
    id: "name",
    type: "text",
    required: true,
    label: "이름",
    placeholder: "주민등록상 이름 입력",
  },
};

const options = ["XXL", "XL", "L", "s"];

const GeneratedForm = () => {
  const router = useRouter();
  const { id } = router.query;
  const [form, setForm] = useState([]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [imgData, setImgData] = useState<File>();
  const [showAddress, setShowAddress] = useState();

  // const [canSubmit, setCanSubmit] = useState(false); // 제출 버튼 활성화/비활성화 상태

  const data = useAppSelector((state) => state.form.forms);
  const formData = data.find((v) => v.id === id);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    // setForm([...form, name])
  };

  const [inputState, setInputState] = useState(false);
  const onChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    checkNum();
    if (e.target.value.length === 3 || e.target.value.length === 8) {
      setNumber(e.target.value + "-");
    } else {
      setNumber(e.target.value);
    }
  };

  useEffect(() => {
    setNumber(number);
  }, [number]);

  function checkNum() {
    const numRegex = /^[0-9]{3}[-]+[0-9]{4}[-]+[0-9]{3}$/;
    if (number.match(numRegex)) {
      setInputState(true);
    } else {
      setInputState(false);
    }
  }

  const textLabel = formData?.formList.find((v) => v.type === "text")?.label;
  const phoneLabel = formData?.formList.find((v) => v.type === "phone")?.label;
  const addressLabel = formData?.formList.find(
    (v) => v.type === "address"
  )?.label;
  const selectLabel = formData?.formList.find(
    (v) => v.type === "select"
  )?.label;

  const selectOptions = formData?.formList.find(
    (v) => v.type === "select"
  )?.options;

  const TextComponent = formData?.formList.map((v) => {
    return v.type === "text" ? (
      <Name
        label={textLabel}
        placeholder={testForm.data.placeholder ? testForm.data.placeholder : ""}
        onChangeName={onChangeName}
        name={name}
      />
    ) : null;
  });

  const PhoneComponent = formData?.formList.map((v) => {
    return v.type === "phone" ? (
      <PhoneNum
        label={phoneLabel}
        onChangeNumber={onChangeNumber}
        number={number}
        setNumber={setNumber}
        inputState={inputState}
      />
    ) : null;
  });

  const AddressComponent = formData?.formList.map((v) => {
    return v.type === "address" ? (
      <Address
        label={addressLabel}
        showAddress={showAddress}
        setShowAddress={setShowAddress}
      />
    ) : null;
  });

  const DropDownComponent = formData?.formList.map((v) => {
    return v.type === "select" ? (
      <DropDown
        selectOptions={selectOptions}
        setSelectedItem={setSelectedItem}
      />
    ) : null;
  });

  const attachmentsComponent = formData?.formList.map((v) => {
    return v.type === "file" ? <Attachments setImgData={setImgData} /> : null;
  });

  const agreementContents = formData?.formList.find(
    (v) => v.type === "agreement"
  )?.contents;
  const agreementComponent = formData?.formList.map((v) => {
    return v.type === "agreement" ? (
      <Policy agreementContents={agreementContents} />
    ) : null;
  });

  const onSubmit = () => {
    console.log(name, number, selectedItem, showAddress, imgData);
  };

  return (
    <FormWrapper>
      <Header> Title</Header>
      {TextComponent}
      {PhoneComponent}
      {AddressComponent}
      {DropDownComponent}
      {attachmentsComponent}
      {agreementComponent}
      <Submit onClick={onSubmit}> 제출하기</Submit>
    </FormWrapper>
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
