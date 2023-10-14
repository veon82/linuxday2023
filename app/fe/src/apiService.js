import axios from 'axios';

const API_URL = 'http://ld2023-demo/distros';

export const addDistro = async (distro) => {
  try {
    const response = await axios.post(API_URL, distro);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchDistros = async () => {
    try {
      const response = await axios.get(`${API_URL}`);
      return response.data;
    } catch (error) {
      console.error("Errore nella get:", error);
      throw error;
    }
  };