const validateIdentifier = (identifier) => {
  if (!identifier) {
    return "This field is required.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[1-9](\d{1,3}[-.\s]?)*\d{3,14}$/;

  if (emailRegex.test(identifier)) {
    return null; // Valid email
  } else if (phoneRegex.test(identifier)) {
    return null; // Valid phone number
  } else if (/\d/.test(identifier)) {
    return "Looks like your phone number may be incorrect. Please try entering your full number, including the country code.";
  } else {
    return "Enter a valid email address.";
  }
};

const validatePassword = (password) => {
  if (password.length < 6) {
    return "Create a password at least 6 characters long.";
  }

  const easyToGuessPasswords = [
    "123456",
    "password",
    "qwerty",
    "111111",
    "letmein",
    "123123",
    "abc123",
  ];

  if (easyToGuessPasswords.includes(password.toLowerCase())) {
    return "This password is too easy to guess. Please create a new one.";
  }

  return null;
};

const validateUsername = (username) => {
  if (!username) {
    return "This field is required.";
  }

  if (/^\d+$/.test(username)) {
    return "Your username cannot contain only numbers.";
  }

  const unavailableUsernames = ["user123", "demo"];
  if (unavailableUsernames.includes(username.toLowerCase())) {
    return "This username isn't available. Please try another.";
  }

  return null;
};

export { validateIdentifier, validatePassword, validateUsername };
