import { State } from "pages/forms";

export const findBlank = (formList: State[]) => {
  const targets = formList.map((form) => {
    delete form.description;
    delete form.placeholder;
    return Object.values(form);
  });

  for (let target of targets) {
    for (let e of target) {
      if (e === "") return "true";
      if (Array.isArray(e) && !e.length) return true;
    }
  }

  return false;
};
