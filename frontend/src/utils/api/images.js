import InitAxios from 'axios';
import { PHOTOS } from '../../config';

const axios = InitAxios.create({ baseURL: PHOTOS });

export default {
  getPhotos(page = 5, limit = 12) {
    return axios.get(`list?page=${page}&limit=${limit}`);
  },
};
