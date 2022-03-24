import axios from 'axios';
import { setResponse } from '../components/Content/reducers';

export const setCountryResponse = () => {
    return (dispatch) => {
        axios.get(process.env.REACT_APP_API_URL + "/api/getCountriesTable")
            .then(response => dispatch(setResponse(response)))
    }
};