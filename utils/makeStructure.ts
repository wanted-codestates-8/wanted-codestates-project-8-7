import { State } from "pages/forms";

export function makeStructure({
  type,
  id,
  required,
  label,
  placeholder,
  options,
  description,
  contents,
}: Omit<State, "idx">) {
  switch (type) {
    case "text":
      return {
        id,
        type,
        required,
        label,
        placeholder,
      };

    case "phone":
    case "address":
      return {
        id,
        type,
        required,
        label,
      };

    case "select":
      return {
        id,
        type,
        label,
        options,
        required,
      };
    case "file":
      return {
        id,
        type,
        label,
        required,
        description,
      };

    case "agreement":
      return {
        id,
        type,
        label,
        required,
        contents,
      };
  }
}
