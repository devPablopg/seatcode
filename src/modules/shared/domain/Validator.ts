export const patternEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,})+$/;

export const validateEmail = (email: string): boolean => {
  return patternEmail.test(email);
};