import { useState } from "react";

function useForm({ initialState }) {
  const [state, setState] = useState(initialState);

  function changeState() {
    // cosnoleawfewaf
  }

  return {
    state,
    changeState,
  };
}

export default useForm;
