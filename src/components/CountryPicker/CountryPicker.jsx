import React, {useState, useEffect }from 'react'
import { fetchDailyData } from '../../service'
import {NativeSelect, FormControl} from '@material-ui/core'
import { fetchCountries } from '../../service'

import styles from './CountryPicker.module.css'

const CountryPicker = ({ handleCountryChange }) => {

    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(() => {
        const fetchService = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchService();

    },[setFetchedCountries]);

    // console.log(fetchedCountries);
 
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={ (e) => handleCountryChange(e.target.value) }>
                <option value="global">Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country} >{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker