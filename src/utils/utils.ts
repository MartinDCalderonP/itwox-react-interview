export const validateEmail = (email: string) => {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
};

export const validatePassword = (password: string) => {
  if (password.length < 6) {
    return false;
  }

  return true;
};

export const fetchData = async (url: string) => {
  return fetch(url).then((res) => res.json());
};
