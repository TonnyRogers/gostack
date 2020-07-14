import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
});

api.interceptors.request.use(async (config) => {
  const headers = { ...config.headers };

  // if (token) {
  //   headers.Authorization = `Bearer ${token}`;
  // }

  const team = JSON.parse(await AsyncStorage.getItem('@Omni:team'));

  if (team) {
    headers.TEAM = team.slug;
  }

  return { ...config, headers };
});

export default api;
