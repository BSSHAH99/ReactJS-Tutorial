export const incNumber = (num) => {
  return {
    type: "INCREMENT",
    number: num,
  };
};

export const decNumber = () => {
  return {
    type: "DECREMENT",
  };
};
