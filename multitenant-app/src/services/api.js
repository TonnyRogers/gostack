import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
});

// api.interceptors.request.use((config) => {
//   const { token } = useSelector((state) => state.auth);
//   const team = useSelector((state) => state.teams.active);

//   const headers = { ...config.headers };

//   if (token) {
//     headers.Authorization = `Bearer ${token}`;
//   }

//   if (team) {
//     headers.TEAM = team.slug;
//   }

//   return { ...config, headers };
// });

export default api;
