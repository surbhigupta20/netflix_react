export const checkValidData = (email, password, isSignInForm, fullName) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  console.log(fullName);
  const isFullNameValid = !isSignInForm && fullName !== null && fullName !== "";

  if (!isEmailValid) return "Email id is invalid";
  if (!isPasswordValid) return "Password is invalid";
  if (!isFullNameValid && !isSignInForm) return "Name is invalid";
  // if (name === "") return "enter name";
  return null;
};
