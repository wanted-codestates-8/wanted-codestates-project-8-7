import { State } from "pages/forms";

export const findBlank = (formList: State[]) => {
  const targets = formList.map((form) => {
    const tempForm = { ...form };
    delete tempForm.description;
    delete tempForm.placeholder;
    return Object.values(tempForm);
  });

  for (let target of targets) {
    for (let e of target) {
      if (e === "") return true;
      if (Array.isArray(e) && !e.length) return true;
    }
  }

  return false;
};
