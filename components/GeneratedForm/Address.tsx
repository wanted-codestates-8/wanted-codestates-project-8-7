import { useState } from "react";
import styled from "styled-components";
import { AddrObj } from "types/address";
import ViewPostCode from "components/PostCodeModal";

interface addressProps {
  label: string | undefined;
}

const Address = ({ label }: addressProps) => {
  const [postcodeModal, setPostcodeModal] = useState(false);
  const [addr, setAddr] = useState<AddrObj>();

  const buildAddr = () => {
    if (!addr) return "";
    const bldgName = addr.buildingName === "" ? "" : ` (${addr.buildingName})`;
    return `(${addr.zonecode}) ${addr.address}${bldgName}, ${addr.addressDetail}`;
  };

  return (
    <>
      <Wrapper>
        <Text>{label}</Text>
        <Input onClick={() => setPostcodeModal(true)} value={buildAddr()} />
      </Wrapper>
      {postcodeModal && (
        <ViewPostCode setOpen={setPostcodeModal} setAddr={setAddr} />
      )}
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 20px;
`;

const Text = styled.div`
  font-weight: 800;
`;

const Input = styled.input`
  border-style: none;
  border-radius: 10px;
  background-color: #e9e9e9;
  padding: 16px;
  margin-top: 10px;
  width: 400px;
  height: 54px;
`;

export default Address;
