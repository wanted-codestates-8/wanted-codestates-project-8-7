import React, { useEffect, useState } from "react";
import Name from "components/GeneratedForm/Name";
import styled from "styled-components";
import PhoneNum from "components/GeneratedForm/PhoneNum";
import Address from "components/GeneratedForm/Address";
import Attachments from "components/GeneratedForm/Attachments";
import Policy from "components/GeneratedForm/Policy";
import { useRouter } from "next/router";
import DropDown from "components/GeneratedForm/DropDown";
import { useAppSelector } from "redux/slice";
import { useDispatch } from "react-redux";
import { addData } from "redux/slice";

const GeneratedForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const [text, setName] = useState("");
  const [phone, setNumber] = useState("");
  const [select, setSelectedItem] = useState("");
  const [file, setImgData] = useState<string>("");
  const [address, setShowAddress] = useState("");
  const [agreement, setAgreement] = useState(false);

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
    setNumber(phone);
  }, [phone]);

  function checkNum() {
    const numRegex = /^[0-9]{3}[-]+[0-9]{4}[-]+[0-9]{3}$/;
    if (phone.match(numRegex)) {
      setInputState(true);
    } else {
      setInputState(false);
    }
  }

  const textLabel = formData?.formList.find((v) => v.type === "text")?.label;
  const textPlaceholder = formData?.formList.find(
    (v) => v.type === "text"
  )?.placeholder;
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
        placeholder={textPlaceholder ? textPlaceholder : ""}
        onChangeName={onChangeName}
        name={text}
      />
    ) : null;
  });

  const PhoneComponent = formData?.formList.map((v) => {
    return v.type === "phone" ? (
      <PhoneNum
        label={phoneLabel}
        onChangeNumber={onChangeNumber}
        number={phone}
        setNumber={setNumber}
        inputState={inputState}
      />
    ) : null;
  });

  const AddressComponent = formData?.formList.map((v) => {
    return v.type === "address" ? (
      <Address
        label={addressLabel}
        showAddress={address}
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
      <Policy
        agreement={agreement}
        setAgreement={setAgreement}
        agreementContents={agreementContents}
      />
    ) : null;
  });

  const onSubmit = () => {
    //todo 조건부 비활성화

    const dataset: { [key: string]: any } = {
      text,
      phone,
      select,
      file,
      agreement,
      address,
    };

    const combinedData: { [key: string]: any } = {};

    formData?.formList.forEach((form) => {
      const value = dataset[form.type];

      combinedData[form.label] = {
        type: form.type,
        value,
      };
    });

    dispatch(
      addData({
        id: id as string,
        title: formData!.title,
        dataList: [combinedData],
      })
    );
  };

  return (
    <FormWrapper>
      <Header>{formData?.title}</Header>
      {TextComponent}
      {PhoneComponent}
      {AddressComponent}
      {DropDownComponent}
      {attachmentsComponent}
      {agreementComponent}
      <SubmitWrap>
        <Submit onClick={onSubmit}> 제출하기</Submit>
        <GoBack
          className="go-back"
          onClick={() => {
            router.push("/");
          }}
        >
          {"<"}
        </GoBack>
      </SubmitWrap>
    </FormWrapper>
  );
};
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const Header = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  /* font-size: 16px; */
  margin-top: 2.5rem;
`;

const Submit = styled.button`
  background-color: salmon;
  width: 400px;
  margin-top: auto;
  height: 52px;
  color: white;
  border-radius: 10px;
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
  width: 100%;
  background: white;

  & .go-back {
    position: absolute;
    right: 10px;
    background-color: transparent;
    font-size: 3rem;
    border: 1px solid gray;
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const GoBack = styled.button``;

export default GeneratedForm;
