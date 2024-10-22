export const useSessionStorage = () => {
  const setSessionStory = (key, value) => {
    try {
      sessionStorage.setItem(key, value);
    } catch (error) {
      console.error(error);
    }
  };

  const getSessionStory = (key) => {
    try {
      return sessionStorage.getItem(key);
    } catch (error) {
      console.error(error);
    }
  };

  return { setSessionStory, getSessionStory };
};
