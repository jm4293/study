export const useSessionStorage = () => {
  const setSessionStorage = (key, value) => {
    try {
      sessionStorage.setItem(key, value);
    } catch (error) {
      console.error(error);
    }
  };

  const getSessionStorage = (key) => {
    try {
      return sessionStorage.getItem(key);
    } catch (error) {
      console.error(error);
    }
  };

  return { setSessionStorage, getSessionStorage };
};
