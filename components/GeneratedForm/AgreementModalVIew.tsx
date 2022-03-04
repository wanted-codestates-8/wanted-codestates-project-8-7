import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { RiArrowLeftSLine } from "react-icons/ri";

interface AgreementModalProps {
  agreementContents: string;
  setAgreementModal: Dispatch<SetStateAction<boolean>>;
}

export default function AgreementModalView({
  agreementContents,
  setAgreementModal,
}: AgreementModalProps) {
  return (
    <ModalBackground>
      <ModalWrapper>
        <Header>
          <ArrowBtn onClick={() => setAgreementModal(false)}>
            <RiArrowLeftSLine size={24} />
          </ArrowBtn>
          <HeaderContent>개인정보 수집 약관 동의</HeaderContent>
        </Header>
        <Content
          dangerouslySetInnerHTML={{ __html: agreementContents }}
        ></Content>
      </ModalWrapper>
    </ModalBackground>
  );
}

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 10px;
  background: white;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-28px);
  box-sizing: border-box;
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: white;
  position: relative;
  border-radius: 15px;
`;

const Header = styled.div`
  display: flex;
  width: 400px;
  height: 56px;
  padding-top: 2rem;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px;
`;

const HeaderContent = styled.div`
  margin-left: 90px;
`;

const ArrowBtn = styled.button`
  border: 0;
  outline: 0;
  background: white;
`;

const Content = styled.div`
  margin-top: 3rem;
`;
