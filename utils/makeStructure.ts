import { State } from "pages/forms";
import { v4 as uuid } from "uuid";

export function makeStructure(type: string): State {
  switch (type) {
    case "text":
      return {
        key: uuid(),
        id: "name",
        type: "text",
        required: true,
        label: "",
        placeholder: "",
      };

    case "phone":
      return {
        key: uuid(),
        id: "phone",
        type: "phone",
        required: true,
        label: "",
      };
    case "address":
      return {
        key: uuid(),
        id: "address",
        type: "address",
        required: true,
        label: "",
      };

    case "select":
      return {
        key: uuid(),
        id: "input_0",
        type: "select",
        label: "",
        options: [],
        required: true,
      };
    case "file":
      return {
        key: uuid(),
        id: "input_1",
        type: "file",
        label: "",
        required: false,
        description: "",
      };

    case "agreement":
      return {
        key: uuid(),
        id: "agreement_0",
        type: "agreement",
        label: "",
        required: true,
        contents: "",
      };
    default:
      return {
        key: uuid(),
        id: "name",
        type: "text",
        required: true,
        label: "",
        placeholder: "",
      };
  }
}
