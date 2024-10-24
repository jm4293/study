export const useStorage = () => {
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

  const removeSessionStorage = (key) => {
    try {
      sessionStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  };

  const clearSessionStorage = () => {
    try {
      sessionStorage.clear();
    } catch (error) {
      console.error(error);
    }
  };

  const setLocalStorage = (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.error(error);
    }
  };

  const getLocalStorage = (key) => {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.error(error);
    }
  };

  const removeLocalStorage = (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  };

  const clearLocalStorage = () => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    setSessionStorage,
    getSessionStorage,
    removeSessionStorage,
    clearSessionStorage,
    setLocalStorage,
    getLocalStorage,
    removeLocalStorage,
    clearLocalStorage,
  };
};
