import AsyncStorage from '@react-native-community/async-storage';

const store = async (key, value, json = true) => {
  try {
    await AsyncStorage.setItem(key, json ? JSON.stringify(value) : value);
  } catch (e) {
    // saving error
  }
};

const get = async (key, json = true) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return json ? JSON.parse(value) : value;
    }
    return value;
  } catch (e) {
    // error reading value
    return null;
  }
};

const setFirstLoad = async () => {
  await store('firstLoad', { success: true });
};

const getFirstLoad = async () => {
  const firstLoad = await get('firstLoad');
  return firstLoad;
};

const setToken = async (token) => {
  await store('token', { token });
};

const getToken = async () => {
  const token = await get('token');
  return token;
};

const clearToken = async () => {
  await store('token', null);
};

export default {
  store,
  get,
  getToken,
  clearToken,
  setToken,
  setFirstLoad,
  getFirstLoad,
};
