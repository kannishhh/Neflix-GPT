const checkValidData = (input, password) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
  const isMobileValid = /^[6-9]\d{9}$/.test(input);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
      password
    );

  if (!isEmailValid && !isMobileValid) {
    if(/\d/.test(input)) return "Please enter a valid mobile number.";
    return "Please enter a valid email.";
  }
  if (!isPasswordValid)
    return "Password must include at least 8 characters, a number, a capital letter, and a special character.";

  return null;
};

export default checkValidData;
