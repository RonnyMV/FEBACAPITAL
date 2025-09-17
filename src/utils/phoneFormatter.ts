export const formatPhoneNumber = (value: string) => {
  const digits = value.replace(/\D/g, '');
  
  if (digits.length <= 2) {
    return digits;
  } else if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  } else if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  } else {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
  }
};

export const validatePhoneNumber = (value: string) => {
  const digits = value.replace(/\D/g, '');
  return digits.length === 10 || digits.length === 11;
};
