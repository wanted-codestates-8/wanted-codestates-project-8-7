import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { AddrObj } from "types/address";

interface PostCodeModalProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  setAddr: Dispatch<SetStateAction<any>>;
}

const PostCodeModal = ({ setOpen, setAddr }: PostCodeModalProps) => {
  let addr = useRef<AddrObj>();

  // 상세주소 모달
  const [addrDetailModal, setAddrDetailModal] = useState(false);
  const AddrDetail = () => {
    const wrapper = document.getElementById("modal-content") as HTMLElement;

    const handleConfirm = () => {
      const target = document.getElementById(
        "detail-input"
      ) as HTMLInputElement;

      setOpen(false);
      setAddr({
        ...addr.current,
        addressDetail: target.value,
      });
    };

    const children = (
      <>
        <CurrentAddr>{addr.current?.address}</CurrentAddr>
        <DetailInput id="detail-input" placeholder="상세주소를 입력해주세요" />
        <Confirm onClick={handleConfirm}>입력 완료</Confirm>
      </>
    );
    return createPortal(children, wrapper);
  };

  // 우편번호 검색 모달 열기
  useEffect(() => {
    const wrapper = document.getElementById("modal-content") as HTMLElement;

    new window.daum.Postcode({
      oncomplete: ({ address, zonecode, buildingName }) =>
        (addr.current = {
          zonecode,
          address,
          buildingName,
          addressDetail: "",
        }),
      onclose: () => setAddrDetailModal(true),
      width: "100%",
      height: "100%",
    }).embed(wrapper);
  }, [setAddr, setOpen]);

  return (
    <>
      <BackDrop onClick={() => setOpen(false)} />
      <Content id="modal-content" />
      {addrDetailModal && <AddrDetail />}
    </>
  );
};

const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50rem;
  height: 60rem;
  transform: translate(-50%, -50%);
  background-color: white;
`;

const CurrentAddr = styled.div`
  width: 80%;
  height: 6rem;
  margin: 40px auto 0;
  border-bottom: 2px solid black;
  padding: 0 1.5rem;

  font-size: 18px;
  line-height: 6rem;
`;

const DetailInput = styled.input`
  display: block;
  width: 80%;
  height: 6rem;
  margin: 0 auto;
  border: none;

  font-size: 18px;
`;

const Confirm = styled.button`
  display: block;
  width: 80%;
  height: 5rem;
  margin: 40px auto;
  border-radius: 10px;
  background-color: #f71a53;

  color: white;
  font-size: 16px;
`;

export default PostCodeModal;
