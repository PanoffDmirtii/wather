import axios from 'axios'

const key: string = 'a9ab6cb20a7bb9e3cc534ff6f404eba0';

export const getWather = async (city: string) => {
  try {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
    return res.data;
  }
  catch (err) {
    return console.log(err);
  }
}
