import axios from 'axios';
const url = "https://covid19.mathdro.id/api"

export const fetchData = async (country) => {

  // to facilitate CountryPicker
  let changableUrl =  url;

    if(country){
      changableUrl = `${url}/countries/${country}`;
    }

    try {
        // once you get the payloads from API
        // use destructuting to just get the "data" part of it
        // const response = await axios.get(url); -> This gets the entire API
        const { data: { confirmed, recovered, deaths, lastUpdate } } =  await axios.get(changableUrl);

        const destructuredData = { confirmed, recovered, deaths, lastUpdate, }

        return destructuredData;

    } catch (error) {
        console.log(error)
    }
}


// Daily Data from Line Graph
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    // console.log(data)
    // return data;
    return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
    try {
        // const response = axios.get(`${url}/countries`);
        const {data: {countries}} = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name);
    } catch (error) {
      console.log(error)  
    }
}