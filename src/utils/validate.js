export const checkValidDataForSignIn = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPassword) return "Password is not valid";

  return null;
};
export const checkValidDataForSignUp = (name, email, password) => {
  const isNameValid = /\b[a-zA-Z]{4,}\b/.test(name);

  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPassword) return "Password is not valid";
  if (!isNameValid) return "Name Should contain atlest 4 letters";

  return null;
};
