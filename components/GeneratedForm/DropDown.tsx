import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

interface Test {
  isShow: boolean;
}

const DropDown = ({ selectOptions }: any) => {
  const [isShow, setIsShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const dropdownRef = useRef<any>();

  const onClickShow = () => {
    setIsShow(!isShow);
  };

  const closeContent = (e: any) => {
    if (isShow && !dropdownRef.current.contains(e.target)) {
      setIsShow(false);
    }
  };

  const onClickSelect = (item: any) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    window.addEventListener("click", closeContent);
  });

  return (
    <Wrapper>
      <Text>옵션 1</Text>
      <DropDownWrapper>
        <DropDownBtn isShow={isShow} onClick={onClickShow} ref={dropdownRef}>
          <DropDownText>{selectedItem}</DropDownText>
          {isShow ? (
            <RiArrowUpSLine size={24} />
          ) : (
            <RiArrowDownSLine size={24} />
          )}
        </DropDownBtn>
        <DropdownContent isShow={isShow}>
          {selectOptions && isShow
            ? selectOptions.map((item: any, idx: number) => (
                <DropdownItem key={idx} onClick={() => onClickSelect(item)}>
                  {item}
                </DropdownItem>
              ))
            : null}
        </DropdownContent>
      </DropDownWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 20px;
`;

const DropDownWrapper = styled.div``;

const Text = styled.div`
  font-weight: 800;
`;

const DropDownText = styled.div``;

const DropDownBtn = styled.div<Test>`
  margin-top: 10px;
  background-color: #e9e9e9;
  border-style: none;
  border-radius: ${(props) => (props.isShow ? "10px 10px 0px 0px" : "10px")};
  border: ${(props) => (props.isShow ? "1px solid black" : "none")};
  width: 400px;
  height: 54px;
  font-weight: bold;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DropdownContent = styled.div<Test>`
  position: absolute;
  background-color: #f9f9f9;
  width: 400px;
  border-radius: 0 0 10px 10px;
  z-index: 1;
  border: ${(props) => (props.isShow ? "1px solid black" : "none")};
  border-top: none;
`;

const DropdownItem = styled.div`
  padding: 15px;
  &:first-child {
    margin-top: 10px;
  }
  &:last-child {
    border-radius: 0 0 10px 10px;
  }
  &:hover {
    background-color: lightgray;
  }
`;
export default DropDown;
