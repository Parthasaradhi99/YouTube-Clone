import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': '76160ff011msh3a476db7cee1b64p167ea7jsnc80d896e2c23',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  console.log(url)
  const {data} = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
