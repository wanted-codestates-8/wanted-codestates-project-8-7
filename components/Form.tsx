import React, { memo, useState } from "react";
import { FormProps } from "pages/forms";
import { makeStructure } from "utils/makeStructure";
import Editor from "./Editor";

function Form({ state: { type }, onChange }: FormProps) {
  const [value, setValue] = useState("");
  console.log(value, "1212312312#");
  function handleValue(value: any) {
    console.log(value, "12312312312312411111");
    setValue(value);
  }

  return <Editor value={value} onChange={handleValue} />;
}

export default memo(Form);
