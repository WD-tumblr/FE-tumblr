export const saveLocalStorage = (key, val) => {
  localStorage.setItem(key, JSON.stringify(val));
};

export const getLocalStorage = key => JSON.parse(localStorage.getItem(key));

export const toggleState = key => state => ({ [key]: !state[key] });
