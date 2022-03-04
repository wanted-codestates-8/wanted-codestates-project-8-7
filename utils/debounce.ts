export const debounce = (delay: number) => {
  let debounceId: any;

  return (callback: Function) => {
    if (debounceId) {
      clearTimeout(debounceId);
    }

    debounceId = setTimeout(callback, delay);
  };
};
