export const ValidateEmail = () => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
};

export const ValidateNumber = () => {
  return /^[789]\d{8}$/;
};

export const ValidateName = () => {
    return (/^[a-zA-Z ]+$/);
  };