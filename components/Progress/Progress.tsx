import { useState, useRef, useEffect, useCallback } from "react";
import ProgressBar from "./ProgressBar";
import styled from "styled-components";
function App() {
  const [current, setCurrent] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const limit = 4;
  const range = 100 / limit;
  // const isLoading = useRef(false);
  const animationSpeed = 1000;

  const [imgState, setImgState] = useState([]);

  const handleImgChange = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      // console.log(reader.onprogress);
      reader.onprogress = async (e) => {
        setTimeout(() => {
          setPercentage((e.loaded / e.total) * 100);
        }, 1000);
      };

      reader.readAsDataURL(file);
      reader.onload = () => {
        setImgState((imgState) => [...imgState, reader.result]);

        // setTimeout(() => {
        //   setPercentage(100);
        // }, 5);

        // if (reader.readyState === 2) {
        //   setTimeout(() => {
        //     setPercentage(100);
        //   }, 5);
        // }
      };
    }
  }, []);

  return (
    <BarWrap>
      <label htmlFor="inputFile" className="review-file-label"></label>
      <input
        id="inputFile"
        type="file"
        className="review-file"
        onChange={handleImgChange}
      ></input>

      {imgState.length ? (
        <div>
          {imgState.map((img, idx) => (
            <div key={idx}>
              <img src={img} alt={idx}></img>
              <div>
                <ProgressBar
                  width={percentage}
                  animationSpeed={animationSpeed}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}

      <br />
      <br />
    </BarWrap>
  );
}

export default App;

const BarWrap = styled.div``;
