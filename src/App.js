
import {useState, useEffect} from 'react'
import {Cards, Chart, CountryPicker, Header} from './components'
import styles from './App.module.css';
import  { fetchData } from './service'
import Particles from "react-tsparticles";

function App() {

  // To update geographical global data
  const [data, setData] = useState([])

  useEffect (() => {
    let mounted = true;
    fetchData().then(items => {if(mounted){setData(items)}})
    return () => mounted = false;
  }, [])


  // To update country specific data
  const [country, setCountry] = useState()
  
  const handleCountryChange = async (country ) => {
    const fetchedData = await fetchData(country);
    // return fetchedData
    console.log(fetchedData);
  }

  
  return (
    <div className={styles.container}>
      <Header />
      <Cards data={data}/>  
      <CountryPicker handleCountryChange={handleCountryChange}/>
      <Chart />
    </div>
  );
}

export default App;
