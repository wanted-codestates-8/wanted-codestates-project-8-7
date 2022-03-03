import dynamic from "next/dynamic";
import React from "react";
const ReactQuill = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

import "react-quill/dist/quill.snow.css";
import styled from "styled-components";

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

function Editor({ value, onChange }: EditorProps) {
  const modules = {
    toolbar: [
      //[{ 'font': [] }],

      ["bold", "italic", "strike", "underline"],
      [{ list: "bullet" }, { list: "ordered" }],
      ["image", "link"],

      [{ header: 1 }, { header: 2 }],
    ],
  };

  const formats = [
    //'font',
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "color",
    "background",
  ];

  return (
    <ReactQuillContainer>
      <ReactQuill
        style={{ width: "100%", height: "100%" }}
        theme="snow"
        modules={modules}
        formats={formats}
        value={value || ""}
        onChange={(content, delta, source, editor) => onChange(editor.getHTML())}
      />
    </ReactQuillContainer>
  );
}

const ReactQuillContainer = styled.div`
  height: 50%;
`;

export default Editor;
