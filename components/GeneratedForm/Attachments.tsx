import React, {
  useCallback,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import styled from "styled-components";
import ProgressBar from "../Progress/ProgressBar";

interface AttachmentProps {
  setImgData: Dispatch<SetStateAction<string>>;
}

const Attachments = ({ setImgData }: AttachmentProps) => {
  const [percentage, setPercentage] = useState(0);

  const animationSpeed = 1000;

  const [imgState, setImgState] = useState<string[]>([]);
  const handleImgChange = useCallback((e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onprogress = async (e) => {
        setTimeout(() => {
          setPercentage((e.loaded / e.total) * 100);
        }, 300);
      };

      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        setImgState([result]);
        setImgData(result);
      };
    }
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setPercentage(0);
    }, 300);
  }, [percentage]);

  return (
    <Wrapper>
      <ChangeWrap>
        <Text>첨부파일 (선택)</Text>
        {imgState.length ? (
          <div>
            <ImgBtn htmlFor="inputFile" className="review-file-label">
              이미지 수정
            </ImgBtn>
            <Label
              id="inputFile"
              type="file"
              className="review-file"
              onChange={handleImgChange}
            ></Label>
          </div>
        ) : (
          <></>
        )}
      </ChangeWrap>

      <AttachBox>
        {!imgState.length && (
          <>
            <AttachText htmlFor="inputFile" className="review-file-label">
              + 이미지 추가
            </AttachText>
            <Label
              id="inputFile"
              type="file"
              className="review-file"
              onChange={handleImgChange}
            ></Label>
          </>
        )}

        {imgState.length ? (
          <ImgWrapper>
            {imgState.map((img, idx) => (
              <ImgItem key={idx}>
                <ImgFile src={img} alt={idx.toString()}></ImgFile>
                <ProgressWrap>
                  {percentage === 0 ? (
                    <></>
                  ) : (
                    <ProgressBar
                      width={percentage}
                      animationSpeed={animationSpeed}
                    />
                  )}
                </ProgressWrap>
              </ImgItem>
            ))}
          </ImgWrapper>
        ) : (
          ""
        )}
      </AttachBox>
      <Description>첨부 파일은 위와 같이 입력할 수 있습니다.</Description>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 20px;
`;

const Text = styled.div`
  font-size: 14px;
  font-weight: 800;
  margin-left: 5px;
`;

const AttachBox = styled.div`
  border-style: none;
  border-radius: 10px;
  background-color: #e9e9e9;
  width: 360px;
  height: 250px;
  margin: 8px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
`;

const Label = styled.input`
  display: none;
`;

const AttachText = styled.label`
  display: block;
  margin-top: 20px;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  line-height: 40px;
  text-align: center;
  background-color: salmon;
  color: white;
  cursor: pointer;
`;
const ChangeWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImgBtn = styled.label`
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* width: calc(100% - 50px); */
  /* overflow: scroll; */
  position: relative;
  width: 100%;
  height: 100%;
`;
const ImgItem = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ImgFile = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const ProgressWrap = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 0%;
`;

const Description = styled.div``;

export default Attachments;
